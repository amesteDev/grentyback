const express = require("express");
const router = express.Router();
const sendMail = require('../services/helpers/sendmail');

router.post('//', async (req, res, next) => {
    const sendmail = new sendMail();
    await sendmail.ContactMail(req.body);
    //beroendepå svar skicka svar
})