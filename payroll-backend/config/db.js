const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'ayush1352',
  database: 'dbmsfinal',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool; 