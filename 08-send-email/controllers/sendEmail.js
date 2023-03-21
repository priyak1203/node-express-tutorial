const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'jamar.huels7@ethereal.email',
      pass: 'cQKgjxPbRtumdvhrWr',
    },
  });

  const info = await transporter.sendMail({
    from: '"Pegasus Consulting" <pegasusinternational@gmail.com>',
    to: 'bar@example.com',
    subject: 'Hello There!',
    html: '<h2>Sending Emails with Node.js</h2>',
  });
  res.json(info);
};

module.exports = sendEmail;
