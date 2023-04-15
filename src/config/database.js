
const mysql = require('mysql2')

const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USERNAME,
//   database: process.env.DB_NAME

    host : 'localhost',
    user : 'root',
    database : 'sekolah'

});

module.exports = connection.promise()