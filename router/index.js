const express = require('express') 
const APIrouter = require('./api')
require('dotenv').config()
const {RenderingtheURL, visitHistory} = require('../controllers/shorturl/URLRenderer')
const {homePage} = require('../router/StaticSites/index')
const {loginPage} = require('../router/StaticSites/index')
const {registerPage} = require('../router/StaticSites/index')
const router = express.Router()
const RegisterSchema = require("../modal/RegisterSchema");
const UserValidation = require('../middlewares/authWare')

router.use(process.env.CONFIDENTIAL_API_URL, APIrouter)


router.get("/", UserValidation, homePage)
router.get("/visithistory/:ShortId", visitHistory)
router.get("/login", loginPage)
router.get("/register", registerPage)
router.post("/logout", (req, res)=>{ 
res.clearCookie("Access_Token").redirect("/login") 
})
router.get("/dashboard", UserValidation, async (req, res) => {
    if(req.user){
        const DataOfUser = await RegisterSchema.findById(req.user.id).select('-password').populate('ShortURLDB');
        console.log(DataOfUser);
        res.render('dashboard', {
            CombinedUserURL: DataOfUser,
            inLoggedUser: req.user
        });
    }else{
        res.redirect('/login')
    }
})

router.get("/:ShortID", RenderingtheURL)



router.use((req, res)=>{
    res.render('error')
})

module.exports = router