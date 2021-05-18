const express = require("express");
const router = express.Router();
const AuthServ = require('../services/user/auth');
const authserv = new AuthServ();

router.post('/reg',
    async (req, res, next) => {
            let reg = await authserv.Register(req.body);
            res.send(reg);
    })

router.post('/login',
    async (req, res, next) => {
        //code for login her
        //send email and password to authserv.Login
        try {
            let login = await authserv.Login(req.body.username, req.body.password);
            res.send(login)
        } catch (e) {
            return next(e);
        }
    })

router.post('/activate/:id',
    async (req, res, next) => {
        try {
            let activated = await authserv.Activate(req.params.id);
            res.send(activated);
        } catch (e) {
            return next(e);
        }
    })


    router.post('/resend', async (req, res, next) => {
        try {
            let resend = await authserv.ResendToken(req.body.email);
            res.send(resend);
        } catch (e) {
            return next(e);
        }
    })


module.exports = router;