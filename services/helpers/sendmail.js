//https://www.w3schools.com/nodejs/nodejs_email.asp
//https://nodemailer.com/smtp/
const nodemailer = require('nodemailer');

class mailSender {
    async WelcomeMail(email) {
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
            to: email,
            subject: 'Välkommen till grenty.se',
            text: 'För att bekfräta ditt konto behöver du göra följande: lblasgalfksadfsadf '
        }

        //det här är bara låtsaskod
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }
}

module.exports = mailSender;