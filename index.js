const express = require('express')
const dbConnector = require('./config/dbConnect')
const router = require('./router')
const app = express()
app.use(express.json())
app.use(router)

dbConnector()

router.get('/', function (req, res) {
  res.send('bmw e46 m3 for sale in germany')
})


app.listen(3000, ()=>{
    console.log('listening on port 3000!')
})