const mysql = require('mysql');
const sql = require('./db/sql.js');


const pool = mysql.createPool( {
    connectionLimit : process.env.MYSQL_LIMIT,
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
});

//pool.query('sql문', '값', (err, results) => {
//  
//});

const query = (alias, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql[alias], values, (err, results) => {
            if(err) {
                console.log(err);
                reject({ err });
            }
            else {
                resolve(results);
            }
        })
    })
}

module.exports = {
    query
}