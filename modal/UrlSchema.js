const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortUrlSchema = new Schema({
  url:{
    type: String,
    required: true,
  },
  shortID: string
});

module.exports = mongoose.model('ShorterUrl', shortUrlSchema);
