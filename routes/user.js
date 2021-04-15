const { Router } = require("express");
const express = require("express");
const router = express.Router();
const AuthServ = require('../services/user/auth');
const authserv = new AuthServ();

router.post('/reg',
async (req, res, next) => {
    //code for reg here
    
})

router.post('/login', 
async (req, res, next) => {
    //code for login her
    let kram = await authserv.Logit();
    res.status(200).send(kram);
})


module.exports = router;