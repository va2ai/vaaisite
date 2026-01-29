import os
import re
from dotenv import load_dotenv
load_dotenv()

import praw
from flask import jsonify, Request
from firebase_functions import https_fn, options

# CORS configuration - allow requests from your domains
cors_config = options.CorsOptions(
    cors_origins=["https://vaclaims.net", "https://www.vaclaims.net", "http://localhost:5173"],
    cors_methods=["GET", "POST", "OPTIONS"]
)

# Reddit client - uses environment variables
reddit = praw.Reddit(
    client_id=os.environ.get("REDDIT_CLIENT_ID"),
    client_secret=os.environ.get("REDDIT_CLIENT_SECRET"),
    user_agent="firebase-reddit-api/1.0"
)


def extract_submission_id(url: str) -> str:
    match = re.search(r"/comments/([a-z0-9]+)/", url)
    if not match:
        raise ValueError("Invalid Reddit URL")
    return match.group(1)


@https_fn.on_request(cors=cors_config)
def get_post_text(request: Request):
    """
    Call example:
    https://<region>-<project>.cloudfunctions.net/get_post_text?url=https://www.reddit.com/r/CorporateFacepalm/comments/127wkwu/dow_pretty_ballsy/
    """

    url = request.args.get("url")
    if not url:
        return jsonify({"error": "Missing 'url' parameter"}), 400

    try:
        submission_id = extract_submission_id(url)
        submission = reddit.submission(id=submission_id)

        return jsonify({
            "id": submission.id,
            "title": submission.title,
            "selftext": submission.selftext,
            "author": str(submission.author),
            "subreddit": str(submission.subreddit),
            "score": submission.score,
            "url": submission.url,
            "is_self": submission.is_self
        })

    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


def comment_to_dict(comment):
    """Convert a comment to a dictionary, handling MoreComments objects."""
    if hasattr(comment, 'body'):
        return {
            "id": comment.id,
            "author": str(comment.author) if comment.author else "[deleted]",
            "body": comment.body,
            "score": comment.score,
            "created_utc": comment.created_utc,
            "depth": comment.depth,
            "replies": [comment_to_dict(reply) for reply in comment.replies if hasattr(reply, 'body')]
        }
    return None


@https_fn.on_request(cors=cors_config)
def get_comments(request: Request):
    """
    Get full comment tree for a Reddit post.
    Call example:
    https://api.vaclaims.net/get_comments?url=https://www.reddit.com/r/...&limit=100
    """
    url = request.args.get("url")
    limit = request.args.get("limit", 100, type=int)

    if not url:
        return jsonify({"error": "Missing 'url' parameter"}), 400

    try:
        submission_id = extract_submission_id(url)
        submission = reddit.submission(id=submission_id)

        # Replace MoreComments with actual comments (up to limit)
        submission.comments.replace_more(limit=limit)

        comments = []
        for comment in submission.comments:
            c = comment_to_dict(comment)
            if c:
                comments.append(c)

        return jsonify({
            "id": submission.id,
            "title": submission.title,
            "num_comments": submission.num_comments,
            "comments": comments
        })

    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@https_fn.on_request(cors=cors_config)
def get_all(request: Request):
    """
    Get post text AND full comment tree in one call.
    Call example:
    https://api.vaclaims.net/get_all?url=https://www.reddit.com/r/...&limit=100
    """
    url = request.args.get("url")
    limit = request.args.get("limit", 100, type=int)

    if not url:
        return jsonify({"error": "Missing 'url' parameter"}), 400

    try:
        submission_id = extract_submission_id(url)
        submission = reddit.submission(id=submission_id)

        # Replace MoreComments with actual comments
        submission.comments.replace_more(limit=limit)

        comments = []
        for comment in submission.comments:
            c = comment_to_dict(comment)
            if c:
                comments.append(c)

        return jsonify({
            "id": submission.id,
            "title": submission.title,
            "selftext": submission.selftext,
            "author": str(submission.author) if submission.author else "[deleted]",
            "subreddit": str(submission.subreddit),
            "score": submission.score,
            "url": submission.url,
            "is_self": submission.is_self,
            "num_comments": submission.num_comments,
            "comments": comments
        })

    except ValueError as e:
        return jsonify({"error": str(e)}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@https_fn.on_request(cors=cors_config)
def search_reddit(request: Request):
    """
    Search Reddit for posts.
    Call example:
    https://api.vaclaims.net/search_reddit?query=python&limit=10&sort=relevance&after=t3_xyz&nsfw=true
    """
    query = request.args.get("query")
    limit = request.args.get("limit", 10, type=int)
    sort = request.args.get("sort", "relevance")
    after = request.args.get("after")
    nsfw = request.args.get("nsfw", "false").lower() == "true"

    if not query:
        return jsonify({"error": "Missing 'query' parameter"}), 400

    try:
        search_params = {}
        if after:
            search_params['after'] = after
        if nsfw:
            search_params['include_over_18'] = 'on'

        results = []
        last_fullname = None
        
        for submission in reddit.subreddit("all").search(query, sort=sort, limit=limit, params=search_params):
            last_fullname = submission.fullname
            results.append({
                "id": submission.id,
                "fullname": submission.fullname,
                "title": submission.title,
                "url": submission.url,
                "subreddit": str(submission.subreddit),
                "score": submission.score,
                "over_18": submission.over_18,
                "created_utc": submission.created_utc,
                "author": str(submission.author) if submission.author else "[deleted]",
                "selftext_preview": submission.selftext[:200] + "..." if submission.selftext else ""
            })

        return jsonify({
            "query": query,
            "limit": limit,
            "sort": sort,
            "after": last_fullname,
            "count": len(results),
            "results": results
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@https_fn.on_request(cors=cors_config)
def get_subreddit_posts(request: Request):
    """
    Get top posts from a subreddit.
    Call example:
    https://api.vaclaims.net/get_subreddit_posts?subreddit=python&limit=10&time_filter=day&after=t3_xyz
    """
    subreddit_name = request.args.get("subreddit")
    limit = request.args.get("limit", 10, type=int)
    time_filter = request.args.get("time_filter", "day")
    after = request.args.get("after")

    if not subreddit_name:
        return jsonify({"error": "Missing 'subreddit' parameter"}), 400

    try:
        params = {}
        if after:
            params['after'] = after

        results = []
        last_fullname = None
        
        # Support top posts by time filter
        # Note: 'all' is a valid time_filter for praw
        for submission in reddit.subreddit(subreddit_name).top(time_filter=time_filter, limit=limit, params=params):
            last_fullname = submission.fullname
            results.append({
                "id": submission.id,
                "fullname": submission.fullname,
                "title": submission.title,
                "url": submission.url,
                "subreddit": str(submission.subreddit),
                "score": submission.score,
                "over_18": submission.over_18,
                "created_utc": submission.created_utc,
                "author": str(submission.author) if submission.author else "[deleted]",
                "selftext_preview": submission.selftext[:200] + "..." if submission.selftext else ""
            })

        return jsonify({
            "subreddit": subreddit_name,
            "limit": limit,
            "time_filter": time_filter,
            "after": last_fullname,
            "count": len(results),
            "results": results
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500
