const transporter = require('../nodemailer-config');

const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  const emailText = `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
  `;

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: 'db3901626@gmail.com', // Replace with your email address
      subject,
      text: emailText,
    });
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

module.exports = { sendEmail };
