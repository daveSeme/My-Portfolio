const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 5500; // Change the port number if needed

// Middleware to parse the request body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define the route to handle the form submission
app.post('/send_email', (req, res) => {
  // Extract the form data
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  // Create the email body
  const emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

  // Configure the nodemailer transport
  const transporter = nodemailer.createTransport({
    // Specify your email sending configuration
    // For example, using Gmail SMTP:
    service: 'Gmail',
    auth: {
      user: 'davidseme22@gmail.com',
      pass: '22@Germany'
    }
  });

  // Configure the email options
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'davideme@gmail.com', // Replace with your own email address
    subject: 'New Contact Form Submission',
    text: emailBody
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
