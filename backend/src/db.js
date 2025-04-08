const { Pool } = require('pg');
const { db } = require('./config');

const pool = new Pool({
  user: db.user,
  password: '123456789',
  hots: db.host,
  port: db.port,
  database: db.database,
});

module.exports = pool;
