const express = require('express')                
const shortURLGenerator = require('../../controllers/shorturl/ShortUrlMaker')
const ShortURLrouter = express.Router()


ShortURLrouter.get('/shortUrl', shortURLGenerator)


module.exports = ShortURLrouter

