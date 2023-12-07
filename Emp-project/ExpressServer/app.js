require('dotenv').config({ path : './db/mysql.env' });

const express = require('express');
const app = new express();
const empController = require('./routers/EmpController');

// 등록할 라우터에 부여할 도메인 등록이 가능함.
app.use('/emp', empController); 

app.use(express.json({
    limit: '50mb'
}));

app.listen(6895, () => {
    console.log('server start');
})