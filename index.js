const express = require('express')
const server = express()

const port = process.env.PORT || 6492
server.listen(port, () => {
    console.log(`\n We're live in port ${port}! \n`)
})