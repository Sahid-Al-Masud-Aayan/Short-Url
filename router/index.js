const express = require('express') 
const APIrouter = require('./api')
require('dotenv').config()
const {RenderingtheURL, visitHistory} = require('../controllers/shorturl/URLRenderer')
const {homePage} = require('../router/StaticSites/index')
const {loginPage} = require('../router/StaticSites/index')
const {registerPage} = require('../router/StaticSites/index')
const router = express.Router()

router.use(process.env.CONFIDENTIAL_API_URL, APIrouter)


router.get("/", homePage)
router.get("/visithistory/:ShortId", visitHistory)
router.get("/login", loginPage)
router.get("/register", registerPage)

router.get("/:ShortID", RenderingtheURL)

router.use((req, res)=>{
    res.render('error')
})

module.exports = router