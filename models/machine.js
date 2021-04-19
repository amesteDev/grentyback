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
        type: File
    },
    rentedDates: {
        type: Date
    },
    price: {
        type: Number,
        required: true
    }
});

const Machine = mongoose.model("machine", MachineSchema);
module.exports = Machine;