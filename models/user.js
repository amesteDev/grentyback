const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    xp: {
        type: Number,
        required: true
    },
    skincollection: {
        type: Array,
        required: true
    },
    usertype: {
        type: String,
        required: true
    }
}, {
    collection: 'user'
});


const User = mongoose.model("user", UserSchema);
module.exports = User;