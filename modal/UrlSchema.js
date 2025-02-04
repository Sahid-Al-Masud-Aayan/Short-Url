const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
    url: {  // Ensure this matches what you send
        type: String,
        required: true
    },
    ShortID: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("ShorterUrl", UrlSchema);
