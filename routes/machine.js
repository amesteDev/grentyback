const express = require("express");
const router = express.Router();
const AccessServ = require("../middleware/authreq");
const MachineServ = require("../services/machine/machineAdmin");

const machinserv = new MachineServ();
const accesserv = new AccessServ();

//vet inte om det ska ligga här, men är det en idé att använda geojson:
//https://docs.mongodb.com/manual/tutorial/geospatial-tutorial/

router.get('/info/', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //hämta en användares alla maskiner
    let machines = await machinserv.GetMyMachine(req.user);
    res.send(machines);
})

router.get('/info/:id', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //hämta information om en användares maskin
    let machine = await machinserv.GetOneMachine(req.user, req.params.id);
    res.send(machine);
})

router.get('/check/:user/:machine', async (req, res, next) => {
    let machine = await machinserv.GetOtherMachine(req.params.user, req.params.machine);
    res.send(machine);
})

router.post('/add', accesserv.CheckLoggedInUser, async (req, res, next) => {
    let reg = await machinserv.Add(req.user, req.body);
    res.send(reg);
})

router.put('/update/', accesserv.CheckLoggedInUser, async (req, res, next) => {
    let updated = await machinserv.Update(req.user, req.body);
    res.send(updated);
    //update info on machine
})

router.delete('/delete/', accesserv.CheckLoggedInUser, async (req, res, next) => {
    //delete a machine
    let deleted = await machinserv.Delete(req.user, req.body);
    res.send(deleted);
})

module.exports = router;