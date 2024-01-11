const { TOKEN_SECRET } = require('../config');
const jwt = require('jsonwebtoken');

function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      'xyz123',
      {
        expiresIn: '1d',
      },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

exports.createAccessToken = createAccessToken;
