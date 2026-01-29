const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const {defineString} = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");

setGlobalOptions({maxInstances: 10});

// Set via: firebase functions:config:set gmail.user="x" gmail.pass="x"
const gmailUser = defineString("GMAIL_USER", {default: ""});
const gmailPass = defineString("GMAIL_PASS", {default: ""});

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

      const user = gmailUser.value();
      const pass = gmailPass.value();

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

      // Auto-reply to sender
      const autoReply = {
        from: user,
        to: email,
        subject: "Thanks for reaching out - VA Claims AI",
        html: `
        <p>Hi,</p>
        <p>Thanks for your interest in VA Claims AI. I've received your message and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to connect with me on <a href="https://www.linkedin.com/in/va2ai/">LinkedIn</a>.</p>
        <p>Best,<br>Chris Combs<br>VA Claims AI</p>
      `,
      };

      try {
        await Promise.all([
          transporter.sendMail(mailOptions),
          transporter.sendMail(autoReply),
        ]);
        logger.info("Emails sent", {email, type});
        res.json({success: true});
      } catch (error) {
        logger.error("Email failed", error);
        res.status(500).json({error: "Failed to send email"});
      }
    },
);
