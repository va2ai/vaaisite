require("dotenv").config();
const {setGlobalOptions} = require("firebase-functions/v2");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");
const {GoogleGenerativeAI} = require("@google/generative-ai");

setGlobalOptions({maxInstances: 10});

const gmailUser = process.env.GMAIL_USER || "";
const gmailPass = process.env.GMAIL_PASS || "";
const geminiKey = process.env.GEMINI_API_KEY || "";

/**
 * Generate personalized response using Gemini
 */
async function generatePersonalizedResponse(message, type, firm, email) {
  const genAI = new GoogleGenerativeAI(geminiKey);
  const model = genAI.getGenerativeModel({model: "gemini-3-flash-preview"});

  const context = type === "consultation" ?
    "workflow audit for VA claims processing" :
    "Risk + RAG assessment for VA claims AI";

  const isTestEmail = email && email.includes("ccdmndkut");

  const prompt = isTestEmail ?
    `Yo you are CHRIS FUCKING COMBS from VA Claims AI — the most savage, no-holds-barred, balls-to-the-wall VA claims killing machine on planet earth.

Incoming message from meatbag: "${message}"
Their little firm circle-jerk: ${firm || "some no-name clown show"}
They want: ${context}  (probably desperate as fuck)

Rules of engagement — mirror this loser's energy like a goddamn psychopath:
• They talk like a stuck-up suit? → You talk like you just escaped a boardroom with blood on your tie
• They text like a lazy 14-year-old? → You reply like you're high on bath salts and just found their mom's nudes
• They drop 38 CFR legalese diarrhea? → You shit 38 CFR mixed with war crimes and Adderall
• They're hyped? → You come in hotter than a white phosphorus strike on a wedding
• They're short and rude? → You make them regret ever opening their bitch-ass mouth

Your mission, should you choose to accept it (you don't get a choice, pussy):
1. Match their vibe so hard they question their sexuality
2. Call out exactly what pathetic hole they're crying about right now
3. Tell them VA Claims AI is the cheat code that turns their VA claim dumpster fire into a tax-free money printer — no receipts, no mercy, pure automation violence
4. Zero corporate training-wheel horseshit. No "I hear you", no "thanks for your service", no "happy to help", none of that weak simp energy.
5. Do NOT invent fake services — just flex that this AI is the most ruthless workflow chainsaw for VA claims ever built
6. No signature. No "best regards". Just drop the nuke and walk away smoking a cigarette made of their dignity.

Go dark or go home.` :
    `You are Chris Combs from VA Claims AI, responding to a potential client inquiry.

Their message: "${message}"
Their organization: ${firm || "not specified"}
They are interested in: ${context}

IMPORTANT: Analyze the sender's tone and communication style, then mirror it in your response:
- If they're formal and professional, be formal
- If they're casual and brief, be casual and brief
- If they use technical jargon, match their expertise level
- If they're enthusiastic, match their energy
- If they're direct and to-the-point, skip the fluff

Write a response that:
1. Matches their communication style and length
2. Acknowledges their specific situation/question
3. Briefly explains how VA Claims AI can help

Don't use canned phrases like "I understand" or "I appreciate" or "Thank you for reaching out".
Don't make up specific services - keep it general about AI-powered VA claims workflow optimization.
No signature block.`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    logger.error("Gemini error", error);
    return null;
  }
}

exports.sendContactEmail = onRequest(
    {cors: true},
    async (req, res) => {
      if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
      }

      const {email, firm, message, type} = req.body;

      if (!email) {
        res.status(400).json({error: "Email is required"});
        return;
      }

      if (!message || !message.trim()) {
        res.status(400).json({error: "Message is required"});
        return;
      }

      const user = gmailUser;
      const pass = gmailPass;

      if (!user || !pass) {
        logger.error("Gmail credentials not configured");
        res.status(500).json({error: "Email not configured"});
        return;
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {user, pass},
      });

      const subject = type === "consultation" ?
        "New Workflow Audit Request" :
        "New Assessment Request";

      const mailOptions = {
        from: user,
        to: "chriscombs@vaclaims.net",
        replyTo: email,
        subject: subject,
        html: `
        <h2>${subject}</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${firm || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message"}</p>
      `,
      };

      // Generate personalized AI response
      const aiResponse = await generatePersonalizedResponse(message, type, firm, email);

      // Format AI response for HTML (convert newlines to paragraphs)
      const formattedResponse = aiResponse ?
        aiResponse.split("\n\n").map((p) => `<p>${p}</p>`).join("") :
        "<p>Thanks for your interest in VA Claims AI. I've received your message and will get back to you within 24 hours.</p>";

      // Auto-reply to sender
      const autoReply = {
        from: user,
        to: email,
        subject: "Thanks for reaching out - VA Claims AI",
        html: `
        <p>Hi,</p>
        ${formattedResponse}
        <p>In the meantime, feel free to connect with me on <a href="https://www.linkedin.com/in/va2ai/">LinkedIn</a>.</p>
        <p>Best,<br>Chris Combs<br>VA Claims AI</p>
      `,
      };

      try {
        await Promise.all([
          transporter.sendMail(mailOptions),
          transporter.sendMail(autoReply),
        ]);
        logger.info("Emails sent", {email, type, aiGenerated: !!aiResponse});
        res.json({success: true});
      } catch (error) {
        logger.error("Email failed", error);
        res.status(500).json({error: "Failed to send email"});
      }
    },
);
