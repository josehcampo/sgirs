const { TOKEN_SECRET } = require('../config');
const jwt = require('jsonwebtoken');

const authRequired = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'No estas autorizado',
    });
  }

  jwt.verify(token, 'xyz123', (err, decoded) => {
    if (err)
      return res.status(401).json({
        message: 'No estas autorizado',
      });

    req.userId = decoded.id;

    next();
  });
};
module.exports = {
  authRequired,
};
