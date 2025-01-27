const mongoose = require('mongoose');

const dbConnector= ()=>{
    mongoose.connect('mongodb+srv://AayanKhan:idontgiveashit@cluster0.uszpu.mongodb.net/MyShortUrl?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('mongoDB is Connected!'));
}

module.exports = dbConnector