const mongoose = require('mongoose');

const MachineSchema = new mongoose.Schema({
    name: {
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
    },
    rentings: [RentSchema]
});

const Machine = mongoose.model("machine", MachineSchema);
module.exports = Machine;