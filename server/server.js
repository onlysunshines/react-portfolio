const dotenv = require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

// server used to send emails
const app = express();
app.use(cors({
    origin: "https://tomasmier.xyz", // frontend domain
    methods: ["POST"],
}));
app.use(express.json());
app.use("/", router);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("GOOGLE_PASS:", process.env.GOOGLE_PASS);
console.log(process.env.EMAIL_PASS)

const contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: `${process.env.EMAIL_USER}`,
        pass: `${process.env.GOOGLE_PASS}`,
    },
});

console.log("EMAIL:", process.env.EMAIL_USER);
console.log("PASS length:", process.env.GOOGLE_PASS.length);

router.post("/contact", (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    console.log("Incoming contact form data:", req.body);

    const mail = {
        from: name,
        to: "tomasmier@gmail.com",
        subject: "Contact From Submission - Portfolio",
        html:  `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.error("Email send error:", error); // helpful for Render logs
            return res.status(500).json({ code: 500, status: "Message Failed", error: error.toString() });
        } else {
            return res.status(200).json({ code: 200, status: "Message Sent" });
        }
    });
});