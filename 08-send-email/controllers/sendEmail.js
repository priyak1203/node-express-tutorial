const nodemailer = require('nodemailer');
const Sib = require('sib-api-v3-sdk');

// using ethreal for testing
const sendEmailEthereal = async (req, res) => {
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

// using sendin blue smtp service
const sendEmailSMTP = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
      user: process.env.USER_NAME,
      pass: process.env.SENDINBLUE_SMTP_KEY,
    },
  });

  const info = await transporter.sendMail({
    from: '"Pegasus Consulting" <pegasusinternational@gmail.com>',
    to: 'idreamybutterfly@gmail.com',
    subject: 'Hello There!',
    html: '<h2>Sending Emails with Node.js using Sendinblue SMTP </h2>',
  });

  res.status(200).json(info);
};

const sendEmail = async (req, res) => {
  // set up sendin blue client instance and api key
  const client = Sib.ApiClient.instance;
  const apiKey = client.authentications['api-key'];
  apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

  // create transactional email instance
  const transEmailApi = new Sib.TransactionalEmailsApi();

  // setup sender info
  const sender = {
    email: 'kpriya1203@gmail.com',
    name: 'Priyadarshini',
  };

  // receivers list
  const receivers = [
    {
      email: 'idreamybutterfly@gmail.com',
    },
  ];

  // sending the email
  const info = await transEmailApi.sendTransacEmail({
    sender,
    to: receivers,
    subject: 'Sending email using Node.js and SendinBlue',
    textContent: `This is the test email sent using SendinBlue email service and Node.js`,
  });

  res.status(200).json(info);
};

module.exports = sendEmail;
