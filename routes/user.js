const { Router } = require("express");
const express = require("express");
const router = express.Router();
const AuthServ = require('../services/user/auth');
const authserv = new AuthServ();

router.post('/reg',
    async (req, res, next) => {
        //code for reg here
        try{
            let reg = await authserv.Register(req.body);
            res.send(reg);
        } catch(e){
            return next(e);
        }
        
    })

router.post('/login',
    async (req, res, next) => {
        //code for login her
        //send email and password to authserv.Login
        try {
            let login = await authserv.Login(req.body.email, req.body.password);
            res.send(login)
        } catch (e){
            return next(e);
        }
})


module.exports = router;