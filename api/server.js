const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
// const bcrypt = require('bcryptjs')
// const knex = require('knex')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send("ITs AliVEEEEE!!!!")
})

// server.use('/api/auth', authRouter)
// sever.use('/api/users', userRouter)

module.exports = sever