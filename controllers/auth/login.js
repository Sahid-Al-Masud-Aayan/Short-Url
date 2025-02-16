const ValidateEmail = require("../../helpers/EmailValidator");
const validatePassword = require("../../helpers/PasswordValidator");
const RegisterSchema = require("../../modal/RegisterSchema");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const loginFunction = async (req, res)=>{
    
    const {email, password} = req.body

    if(!email){
        return res.status(400).send({error: 'Email is required!'})
    }
    if(!ValidateEmail(email)){
        return res.status(400).send({error: 'Email is not valid!'})
    }
    if(!password){
        return res.status(400).send({error: 'Password is required!'})
    }

    const result = validatePassword(password);

    if (!result.valid) {
        return res.status(400).json({ errors: result.errors });
    }
    const existingLoggedInUser = await RegisterSchema.findOne({email})
    if(!existingLoggedInUser){
        return res.status(400).send({error:'Email is not registered!'})
    }
    bcrypt.compare(password, existingLoggedInUser.password).then(function(result) {
         if(result){

         }if(!result){
             res.status(404).send({error:'Password is not correct!'})
         }
        });
    // const match = await bcrypt.compare(password, existingLoggedInUser.password);
    // if (match){
       
    // if (!match){
    //     res.status(400).send({error:'pAssWord Is Fake'})
    //  }
     const jwtAccessToken = jwt.sign({
        data: {
            id: existingLoggedInUser._id,
            email: existingLoggedInUser.email
        }
      }, process.env.JWT_SECRET_TOKEN , { expiresIn: '5d' });

      const PassDedeuctor = await RegisterSchema.findOne({email: existingLoggedInUser.email}).select('-password')


      res.status(200).cookie('Access_Token', jwtAccessToken).redirect("/")
      
      
}

module.exports = loginFunction