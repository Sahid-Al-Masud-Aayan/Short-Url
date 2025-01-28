const express = require('express') 
const Authrouter = require('./auth')
const ShortURLrouter = require('./shortUrl')
const APIrouter = express.Router()


APIrouter.use('/auth', Authrouter)
APIrouter.use('/generator', ShortURLrouter)

module.exports = APIrouter