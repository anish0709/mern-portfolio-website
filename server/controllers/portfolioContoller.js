const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Email content
    const emailData = {
      from: "Excited User <mailgun@sandboxc3ee4360d0124c82a4eabe745ebf4726.mailgun.org>",
      to: "anishudr1@gmail.com",
      subject: "Regarding MERN Portfolio App",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name: ${name}</p></li>
          <li><p>Email: ${email}</p></li>
          <li><p>Message: ${msg}</p></li>
        </ul>
      `,
    };

    // Send email
    mg.messages.create(process.env.MAILGUN_DOMAIN, emailData)
      .then(msg => {
        console.log(msg);
        return res.status(200).send({
          success: true,
          message: "Your message was sent successfully",
        });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).send({
          success: false,
          message: "Failed to send email",
          error: err.message,
        });
      });

  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
