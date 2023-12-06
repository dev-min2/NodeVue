// 5개 기능조회
require('dotenv').config({ path : './db/mysql.env' });

const express = require('express');
const app = new express();

const db = require('./db');


app.use(express.json());

app.use(express.static('dist'));

app.listen(4500, () => {
    console.log('server start');
})

// index.html파일을 보냄
app.get('/', async (req, res) => {
    res.sendFile('/dist/index.html');
})

app.get('/api/user', async (req, res) => {
    let data = await db.query('userListQuery');
    console.log(data);
    res.send(data);
})

app.get('/api/user/:userNo', async (req, res) => {
    let userNo = req.params.userNo;
    
    let data = await db.query('userQuery',userNo);
    console.log(data);
    // js+mysql select는 pk조건 쿼리도 배열로 반환되기에 
    res.send(data[0]);
})

app.post('/api/user', async(req, res) => {
    let data = req.body;
    
    let ret = await db.query('userInsertQuery',data);
    res.send(ret);
})

app.put('/api/user/:userNo', async(req, res) => {
    let dbData = [req.body, req.params.userNo]
    console.log(dbData);

    let data = await db.query('userUpdateQuery',dbData);
    res.send(data);
})

app.delete('/api/user/:userNo', async(req, res) => {
    let userNo = req.params.userNo;

    let data = await db.query('userDeleteQuery', userNo);
    res.send(data);
})