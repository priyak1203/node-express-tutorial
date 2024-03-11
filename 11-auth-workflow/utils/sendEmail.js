const nodemailer = require('nodemailer');

// sending email using ethereal - testing
const sendEmail = async () => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'dillon.mayer3@ethereal.email',
      pass: 'dtdnC3VHrx3RXuQ9TT',
    },
  });

  const info = await transporter.sendMail({
    from: '"Coding Addict" <codingAddict@gmail.com>', // sender address
    to: 'user@gmail.com', // list of receivers
    subject: 'Testing  Email', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Testing Email</b>', // html body
  });
};

module.exports = sendEmail;
