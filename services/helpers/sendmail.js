//https://www.w3schools.com/nodejs/nodejs_email.asp
//https://nodemailer.com/smtp/
const nodemailer = require('nodemailer');

class mailSender {
    transporter = nodemailer.createTransport({
        host: 'ns10.inleed.net',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAILPW
        }
    });

    async WelcomeMail(email, token) {
        const textToSend = `Hej och välkommen till Grenty! För att aktivera ditt konto och börja använda tjänsten behöver du klicka på länken här nedanför: 
        https://grenty.se/user/activate/${token}

        Vänligen
        Teamet på grenty.se
        `

        const mailOptions = {
            from: 'no-reply@grenty.se',
            to: email,
            subject: 'Välkommen till grenty.se',
            text: textToSend
        }


        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return error
            } else {
                return 'Email sent: ' + info.response 
            }
        })
    }

    async ContactMail(contactFormData) {
        const msg = contactFormData.msg;

        const mailOptions = {
            from: contactFormData.email,
            to: 'info@grenty.se',
            subject: 'Kontaktformulär på grenty.se',
            text: msg
        }
        
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }
}

module.exports = mailSender;