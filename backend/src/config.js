const { config } = require('dotenv');
config();

const TOKEN_SECRET = 'some secret key';
const ORIGIN = process.env.ORIGIN || 'http://localhost:3000';

module.exports = {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  },
  TOKEN_SECRET,
  ORIGIN,
};
