const jwt = require('jsonwebtoken'); // installed this library

const secrets = require('../config/secrets.js');

module.exports = {
  generateToken,
};

function generateToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
    // roles: ['Employee'],
  };

  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
