const mysql = require('mysql');
const sql = require('./db/sql.js');

const pool = mysql.createPool( {
    connectionLimit : 10,
    host : '127.0.0.1',
    port : 3306,
    user : 'dev',
    password : '1234',
    database : 'dev'
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