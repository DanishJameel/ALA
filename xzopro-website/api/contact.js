const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Set in Vercel environment variables
      pass: process.env.EMAIL_PASS, // Set in Vercel environment variables
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email.', error });
  }
} 