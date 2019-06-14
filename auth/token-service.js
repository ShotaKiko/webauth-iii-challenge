const jwt = require('jsonwebtoken'); // installed this library

const secrets = require('../config/secrets.js');

module.exports = {
  generateToken,
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    roles: ['Employee'],
  };

  const options = {
    expiresIn: '20m',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
