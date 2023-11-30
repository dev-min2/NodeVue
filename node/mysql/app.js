// 환경설정은 main js에서 처리.
require('dotenv').config({ path : './db/mysql.env' });
const express = require('express');
const mysql = require('./db.js');

const app = express();

// 모든 요청에 대한 json데이터를 파싱해 js객체로 변환
app.use(express.json( {
    limit : '50mb'
}));

app.listen(3000, () => {
    console.log('Server start');
})

app.get('/customers', async (req, res) => {
    let id = req.params.id;
    let data = null;
    data = await mysql.query('customerList');
    
    console.log(data);
    res.send(data);
})

app.get('/customers/:id', async(req,res) => {
    let id = req.params.id;
    let data = await mysql.query('customerQuery', id);;
    
    console.log(data);
    res.send(data);
})


/*
customerInsertQuery의 반환값
{
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 102,
    "serverStatus": 2,
    "warningCount": 0,
    "message": "",
    "protocol41": true,
    "changedRows": 0
}
*/
app.post('/customers', async( req, res ) => {
    //let {name, email, address, PHONE } = req.body.params;
    let datas = req.body;
    console.log(datas);

    const data = await mysql.query('customerInsertQuery', datas);
    console.log(data);
    res.send(data);
})

app.put('/customers/:id', async( req, res ) => {
    let datas = [req.body, req.params.id];
    // let {name, email, address, PHONE } = req.body;
    // let { id } = req.params;
    // let updateObj = {
    //     name : name,
    //     email : email,
    //     PHONE : PHONE,
    //     address : address
    // };

    // let idObj = {
    //     id : id
    // }

    // console.log(updateObj);
    // console.log(idObj);

    //?가 여러개면 배열로 담아서 보냄
    datas.push(updateObj);
    datas.push(idObj);
    console.log(datas);
    const data = await mysql.query('customerUpdateQuery', datas);
    console.log(data);
    res.send(data);
})

app.delete('/customers/:id', async( req, res ) => {
    let {id} = req.params;

    const data = await mysql.query('customerDeleteQuery', id);
    console.log(data);
    res.send(data);
})
