const RegisterFunction = (req, res)=>{
    
    const {fullname, email, password} = req.body

    console.log(fullname, email, password)
    res.send('register page is created')
}

module.exports= RegisterFunction