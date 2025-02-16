const express = require('express')
const router = require('./router')
require('dotenv').config()
const dbConnector = require('./config/dbConnect')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static(__dirname +'/public'))
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(router)


dbConnector()



app.listen(3000, ()=>{
    console.log('listening on port 3000!')
})