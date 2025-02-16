const ValidateEmail = require('../../helpers/EmailValidator')
const validatePassword = require('../../helpers/PasswordValidator')
const RegisterSchema = require('../../modal/RegisterSchema')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const RegisterFunction = async (req, res)=>{
    
    const {fullname, email, password} = req.body

    if(!fullname){
        return res.status(400).send({error: 'Name is required!'})
    }
    if(!email){
        return res.status(400).send({error: 'Email is required!'})
    }
    if(!ValidateEmail(email)){
        return res.status(400).send({error: 'Email is not valid!'})
    }
    if(!password){
        return res.status(400).send({error: 'Password is required!'})
    }

    const result = validatePassword(password); // Store the result once

    if (!result.valid) {
        return res.status(400).json({ errors: result.errors });
    }
    

        
        console.log(ValidateEmail(email))

        const existingUser = await RegisterSchema.findOne({email});

        if(existingUser){
            return res.status(400).send({error:'Email already exists!'})
        }

        bcrypt.hash(password, saltRounds, function(err, hash) {
            const UserReg =  RegisterSchema ({
                fullname, email, password: hash
            })
            UserReg.save()
        });

        
        
        res.redirect('/login')
}

module.exports= RegisterFunction