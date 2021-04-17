//https://www.w3schools.com/nodejs/nodejs_email.asp
//https://nodemailer.com/smtp/
const nodemailer = require('nodemailer');

//det här är bara låtsaskod
const transporter = nodemailer.createTransport({
    host: 'kram',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPW
    }
});

const mailOptions = {
    from: 'no-reply@grenty.se',
    to: sendToMail,
    subject: 'Välkommen till grenty.se',
    text: 'För att bekfräta ditt konto behöver du göra följande: lblasgalfksadfsadf '
}

transporter.sendMail(mailOptions, (error, info) => { 
    if (error) {
        console.log(erorr)
    } else {
        console.log('Email sent: ' + info.response)
    }
})