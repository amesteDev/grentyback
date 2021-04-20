const express = require("express");
const router = express.Router();
const authed = require("../middleware/authreq");
const MachineServ  = require("../services/machine/machineAdmin");

const machinserv = new MachineServ();

router.post('/add', async (req, res, next) => {
    //add new machine
    //check if user is authed first also needs to send the user._id
    //to be sure that the machine is saved to the right document.
    let reg = await machinserv.Add(req.body);
    res.send(reg);
})


router.put('/update/:id', async (req, res, next) => {
    let updated = await machineserv.Update(req.params.id, req.body);
    res.send(updated);
    //update info on machine
})

router.delete('/delete/:id', async (req, res, next) => {
    //delete a machine
    let deleted = await machineserv.Delete(req.params.id, req.body);
    res.send(deleted);
})

module.exports = router;