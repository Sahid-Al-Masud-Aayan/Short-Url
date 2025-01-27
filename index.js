const express = require('express')
const dbConnector = require('./config/dbConnect')
const app = express()
const router = express.Router()
app.use(express.json())
app.use(router)

dbConnector()

router.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(3000, ()=>{
    console.log('listening on port 3000!')
})