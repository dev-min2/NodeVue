// 5개 기능조회
require('dotenv').config({ path : './db/mysql.env' });

const express = require('express');
const app = new express();

const db = require('./db');


app.use(express.json());

app.listen(4500, () => {
    console.log('server start');
})

app.get('/user', async (req, res) => {
    let data = await db.query('userListQuery');
    console.log(data);
    res.send(data);
})

app.get('/user/:userNo', async (req, res) => {
    let userNo = req.params.userNo;
    
    let data = await db.query('userQuery',userNo);
    console.log(data);
    res.send(data[0]);
})

app.post('/user', async(req, res) => {
    let data = req.body;
    
    let ret = await db.query('userInsertQuery',data);
    res.send(ret);
})

app.put('/user/:userNo', async(req, res) => {
    let dbData = [req.body, req.params.userNo]
    console.log(dbData);

    let data = await db.query('userUpdateQuery',dbData);
    res.send(data);
})

app.delete('/user/:userNo', async(req, res) => {
    let userNo = req.params.userNo;

    let data = await db.query('userDeleteQuery', userNo);
    res.send(data);
})