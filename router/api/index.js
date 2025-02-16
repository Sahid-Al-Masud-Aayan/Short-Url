const express = require('express') 
const Authrouter = require('./auth')
const ShortURLrouter = require('./shortUrl')
const UserValidation = require('../../middlewares/authWare')
const APIrouter = express.Router()


APIrouter.use('/auth', Authrouter)
APIrouter.use('/generator', UserValidation , ShortURLrouter)

module.exports = APIrouter