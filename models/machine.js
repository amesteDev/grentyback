const mongoose = require('mongoose');

const MachineSchema = new mongoose.Schema({
    machineName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
});

const Machine = mongoose.model("machine", MachineSchema);
module.exports = Machine;