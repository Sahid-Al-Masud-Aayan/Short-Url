var jwt = require('jsonwebtoken');
const UserValidation = (req, res, next)=>{

    const accessToken = req.cookies

    if(accessToken.Access_Token) 
        jwt.verify(accessToken.Access_Token, process.env.JWT_SECRET_TOKEN ,function(err, decoded) {
        console.log(decoded.foo) // bar
        if(err){
            req.user = null
            next()
        }
        if(decoded.data){
            req.user = decoded.data
            next()
            console.log(req.user.id);
            
        }
      });


    else{
        req.user = null
        next()

    }

}

module.exports = UserValidation