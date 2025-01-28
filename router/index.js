const express = require('express') 
const APIrouter = require('./api')
const router = express.Router()


router.use("/api/v1/", APIrouter)

router.use( (req, res)=>{
    res.send("page was not created")
})

module.exports = router