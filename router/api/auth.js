const express = require('express') 
const loginFunction = require('../../controllers/auth/login')
const RegisterFunction = require('../../controllers/auth/register')
const Authrouter = express.Router()


Authrouter.post('/login', loginFunction)
Authrouter.post('/register', RegisterFunction)
module.exports = Authrouter