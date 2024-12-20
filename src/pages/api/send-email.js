import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "İletişim Formu",
      html: `
        <div style="width: 100%; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; background-color: #f3f4f6; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); padding: 20px;">
            <h2 style="color: #1f2937; font-size: 24px; margin-bottom: 10px;">İletişim Formu Mesajı</h2>
            <p style="font-size: 16px; color: #6b7280; margin-top: 0;">Bu mesaj, kastilyakirsalturizmtesisi.com iletişim formu üzerinden gönderildi.</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            
            <div style="margin-bottom: 10px;">
              <h3 style="color: #111827; font-size: 18px; margin: 0;">İletişim Bilgileri</h3>
              <p style="color: #6b7280; margin: 8px 0;"><strong>İsim:</strong> ${name}</p>
              <p style="color: #6b7280; margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="color: #6b7280; margin: 8px 0;"><strong>Telefon:</strong> ${phone}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #111827; font-size: 18px; margin: 0;">Mesaj</h3>
              <p style="color: #374151; margin: 8px 0;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="font-size: 12px; color: #9ca3af; text-align: center;">Kastilya Kırsal Turizm Tesisi</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error: ", error);
    return res
      .status(500)
      .json({ message: "Email send failed", error: error.message });
  }
}
