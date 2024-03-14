const nodemailer = require('nodemailer');
const nodeMailerConfig = require('./nodeMailerConfig');

// sending email using ethereal - testing
const sendEmail = async ({ to, subject, html }) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodeMailerConfig);

  return transporter.sendMail({
    from: '"Coding Addict" <codingAddict@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });
};

module.exports = sendEmail;
