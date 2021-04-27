const express = require("express");
const router = express.Router();
const authed = require("../middleware/authreq");
const MachineServ  = require("../services/machine/machineAdmin");

const machinserv = new MachineServ();

router.get('/info/:userid', async (req, res, next) => {
    //hämta en användares alla maskiner
    let machines = machinserv.Get();
    res.send(machines);
})

router.get('/info/:userid/:id', async (req, res, next) => {
    //hämta information om en användares maskin
    let machine = machinserv.GetOneMachine(req.params.id);
    res.send(machine);
})

router.post('/add', authed.CheckLoggedInUser, async (req, res, next) => {
    //add new machine
    //check if user is authed first also needs to send the user._id
    //to be sure that the machine is saved to the right document.
    let reg = await machinserv.Add(req.body);
    res.send(reg);
})

router.put('/update/:userid', async (req, res, next) => {
    let updated = await machineserv.Update(req.params.userid, req.body);
    res.send(updated);
    //update info on machine
})

router.delete('/delete/:userid', async (req, res, next) => {
    //delete a machine
    let deleted = await machineserv.Delete(req.params.userid, req.body);
    res.send(deleted);
})

module.exports = router; 