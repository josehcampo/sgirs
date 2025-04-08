const { config } = require('dotenv');
config();

const TOKEN_SECRET = 'some secret key';
//const ORIGIN = 'http://localhost:3000';

module.exports = {
  db: {
    user: process.env.DB_USER,
    password: '123456789',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  },
  TOKEN_SECRET,
  //ORIGIN,
};
