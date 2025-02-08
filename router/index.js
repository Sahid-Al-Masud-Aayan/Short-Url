const express = require('express') 
const APIrouter = require('./api')
const {RenderingtheURL, visitHistory} = require('../controllers/shorturl/URLRenderer')
const {homePage} = require('../router/StaticSites/index')
const {loginPage} = require('../router/StaticSites/index')
const {registerPage} = require('../router/StaticSites/index')
const router = express.Router()

router.use("/api/v1/", APIrouter)


router.get("/", homePage)
router.get("/visithistory/:ShortId", visitHistory)
router.get("/login", loginPage)
router.get("/register", registerPage)

router.get("/:ShortID", RenderingtheURL)

router.use((req, res)=>{
    res.render('error')
})

module.exports = router