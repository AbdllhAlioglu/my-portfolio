const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5001; // Kullanmak istediğin port

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Transporter oluştur
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "abdullahalioglu37@gmail.com", // Gönderen e-posta adresi
    pass: "xxgjqscyunolwifz", // Gönderen e-posta şifresi
  },
});

// POST isteğini dinle
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // Kullanıcının e-posta adresi
    to: "aliogluuabdullah@gmail.com", // Alıcı e-posta adresi
    subject: `New message from ${name}`, // Konu
    text: message, // Mesaj içeriği
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent successfully!");
  });
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
