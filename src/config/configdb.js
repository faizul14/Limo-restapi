const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: process.env.HOST,
    user: 'root',
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

module.exports = dbPool.promise();