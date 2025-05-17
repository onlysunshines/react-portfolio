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
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "tomasmier@gmail.com",
        pass: `${process.env.GOOGLE_PASS}`,
    },
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
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
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});