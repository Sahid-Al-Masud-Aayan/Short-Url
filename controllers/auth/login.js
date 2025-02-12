const loginFunction =(req, res)=>{

    const {fullname, email, password} = req.body
    console.log(fullname, email, password)

    res.send('login page is created')
}

module.exports = loginFunction