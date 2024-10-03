const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
};

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // E-posta doğrulama
  if (!validateEmail(email)) {
    return res.status(400).send("Invalid email format.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aliogluuabdullah@gmail.com", // Kendi email adresinizi buraya ekleyin
      pass: "xxrl tbmq xuau fkfj", // Kendi email şifrenizi buraya ekleyin
    },
  });

  const mailOptions = {
    from: email, // Sabit gönderici adresi (SMTP tarafından belirlenir)
    to: "aliogluuabdullah@gmail.com", // Alıcının adresi (formda belirtilen sabit alıcı)
    subject: `New message from ${name}`,
    text: message,
    replyTo: email, // Kullanıcının formda girdiği e-posta dinamik olarak eklenir
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Failed to send email.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Message sent successfully!");
    }
  });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
