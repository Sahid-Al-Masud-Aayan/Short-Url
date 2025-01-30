const express = require('express')                
const shortURLGenerator = require('../../controllers/shorturl/ShortUrlMaker')
const ShortURLrouter = express.Router()


ShortURLrouter.post('/shortUrl', shortURLGenerator)


module.exports = ShortURLrouter

