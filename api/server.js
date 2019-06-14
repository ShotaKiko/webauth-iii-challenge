const express = require('express');

const middleware = require('./middleware.js');
const authRouter = require('../auth/authRouter.js');
// const usersRouter = require('../users/users-router.js');

const server = express();

middleware(server);

server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;