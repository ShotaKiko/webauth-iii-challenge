const router = require('express').Router()
const bcrypt = require('bcryptjs')


const UserFunctions = require('../users/helperFunctions.js')
const tokenService = require('./token-service.js')


//~~~~~~~~~~Endpoints routing with /api/auth~~~~~~~~~~~~~~~~~~~~~~

router.post('/register', async(req, res) => {
    try{
        let user = req.body
        const hash = bcrypt.hashSync(user.password, 12)
        user.password = hash

        const savedNewUser = await UserFunctions.add(user)
        const token = tokenService.generateToken(savedNewUser)
        res.status(201).json({ token })
    } catch(err){
        res.status(500).json({ message:"Error registering the new user."})
    }
})

router.post('/login', async (req, res) => {
   let { username, password } = req.body 
   try{
        const verifiedUser = await UserFunctions.findBy({ username })
        .first()
        if( verifiedUser && bcrypt.compareSync(password, verifiedUser.password)) {
            const token = tokenService.generateToken(verifiedUser)
            res.status(200).json({
                message:`Welcome ${verifiedUser.username}! Here is your token...`,
                token,
                roles: token.roles
            })
        } else {
            res.status(401).json({ message:"Invalid credentials" })
        }
    } catch(err) {
        res.status(500).json({ message:"Error logging in." })
    }
})

module.exports = router