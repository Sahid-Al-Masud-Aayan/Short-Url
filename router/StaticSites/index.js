const homePage =(req, res)=>{
    res.render('index', {
        inLoggedUser: req.user
    });
}


const loginPage = (req, res)=>{
    res.render('login');
}


const registerPage =(req, res)=>{
    res.render('register')

}
module.exports= {homePage, registerPage, loginPage  }
