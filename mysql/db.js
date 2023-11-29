const mysql = require('mysql');
const sql = require('./db/sql.js');
require('dotenv').config({ path : './db/mysql.env' });


const pool = mysql.createPool( {
    connectionLimit : process.env.MYSQL_LIMIT,
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});

//pool.query('sql문', '값', (err, results) => {
//  
//});

const query = (alias, values) => {
    return new Promise((resolve, reject) => {
        return pool.query(sql[alias], values, (err, results) => {
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

async function test() {
    let data = await query('customerList');
    console.log(data);
}
test();

module.exports = {

}