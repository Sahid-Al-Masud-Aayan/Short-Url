const mongoose = require('mongoose');

const dbConnector= ()=>{
    mongoose.connect(process.env.DATABASE_CONNECTOR_LINK)
  .then(() => console.log('mongoDB is Connected!'));
}

module.exports = dbConnector