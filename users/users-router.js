const router = require('express').Router()

const UserFunctions = require('./helperFunctions.js')
const restricted = require('../auth/restrictedMiddleware.js')

router.get('/', restricted, async(req, res) => {
    try{
        const userList = await UserFunctions.find()
        res.status(200).json(userList)
    } catch(err) {
        res.status(500).json(err)
    }
})

router.get('/:id', restricted, async(req, res) => {
    try{
        const user = await UserFunctions.findById(req.params.id)
        res.status(200).json(user)
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router