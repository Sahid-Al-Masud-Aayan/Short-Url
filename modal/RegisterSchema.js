const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    fullname: {  // Ensure this matches what you send
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ShortURLDB:{
        ref: 'ShorterUrl',
        type: [mongoose.Schema.ObjectId]
    },
});

module.exports = mongoose.model("RegisteredUser", RegisterSchema);
