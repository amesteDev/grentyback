const { Router } = require("express");
const express = require("express");
const router = express.Router();
const AuthServ = require('../services/user/auth');
const authserv = new AuthServ();

router.post('/reg',
async (req, res, next) => {
    //code for reg here
    authserv.Register(req.data);
})

router.post('/login', 
async (req, res, next) => {
    //code for login her
    //send email and password to authserv.Login
    authserv.Login(req.data);
})


module.exports = router;