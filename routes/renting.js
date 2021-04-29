const express = require("express");
const router = express.Router();
const AccessServ = require("../middleware/authreq");
const RentServ = require("../services/actions/rent");

const rentserv = new RentServ();
const accesserv = new AccessServ();

router.post('/request/send', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //skicka förfrågan om att hyra
    await rentserv.RequestRent(req.user, req.body.ownerOfMachine, req.body.machine);
    
})

router.post('/request/answer', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //skicka svaret på en förfrågan
    if(req.body.answer === 'decline'){
        await rentserv.DeclineRent(req.user, req.body.requestId);
    }

    if(req.body.anser === 'accept'){
        await rentserv.AcceptRent(req.user, req.body.requestId);
    }
   
})

router.put('/complete', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //markera en uthyrning som slutförd och betald
    await rentserv.CompleteRent(req.user, req.body.rentId);
})

router.post('/ref', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //ge betyg på den man hyrt av eller den man hyrt ut till
    await rentserv.AddScore(req.user, req.body.rentId);
})

module.exports = router;