const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const knex = require('knex')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

const config ={
    client:"sqlite3",
    connection: {
        filename:'./data/authiii.db3'
    },
    useNullasDefault: true
};

const db = knex(config)







//~~~~~~~~~~~~~~~~~~~~~~~~SERVER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const port = process.env.PORT || 6492
server.listen(port, () => {
    console.log(`\n We're live in port ${port}! \n`)
})