const express = require('express') 
const loginFunction = require('../../controllers/auth/login')
const RegisterFunction = require('../../controllers/auth/register')
const Authrouter = express.Router()


Authrouter.get('/login', loginFunction)
Authrouter.get('/register', RegisterFunction)
module.exports = Authrouter