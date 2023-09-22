const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.json());

// Replace these with your actual email settings
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your.email@gmail.com", // Your email address
    pass: "your-email-password", // Your email password
  },
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Here you'd implement your actual login logic.
  // For this example, let's assume a successful login.

  // Send an email on successful login
  const mailOptions = {
    from: "your.email@gmail.com",
    to: email,
    subject: "Login Successful",
    text: "You have successfully logged in.",
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent" });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
