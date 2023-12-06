require('dotenv').config({ path : './db/mysql.env' });

const express = require('express');
const app = new express();

console.log(process.env.MYSQL_LIMIT);

//const employeeDAO = require('./db/DAO/employeeDAO');
const EmpService = require('./Service/EmpService');

app.use(express.json({
    limit: '50mb'
}));

app.listen(6895, () => {
    console.log('server start');
})

// index.html파일을 보냄
// app.get('/', async (req, res) => {
//     res.sendFile('/dist/index.html');
// })
app.get('/emp', async (req, res) => {
    let pageNo = req.query.pageNo;
    
    try {
        const empService = new EmpService();
        let resultData = await empService.getAllEmpList(pageNo);
        res.send(resultData);
    }
    catch(e) {
        console.log(e);
    }
})


app.get('/emp/:empNo', async (req, res) => {
    let empNo = req.params.empNo;
    
    const empService = new EmpService();
    let data = await empService.getEmpInfo(empNo);
    res.send(data);
})

app.post('/emp', async(req, res) => {
    const employees = req.body.employees;
    const deptEmp = req.body.deptEmp;
    const salaryies = req.body.salaries;
    
    try {
        const empService = new EmpService();
        let result = await empService.saveEmp(employees, deptEmp, salaryies);

        res.send(result);
    }
    catch(e) {
        console.log(e);
    }
})

app.put('/emp/:empNo', async(req, res) => {
    let dbData = [req.body, req.params.empNo]
    console.log(dbData);

    try {
        const empService = new EmpService();
        let data = await empService.modifyEmpInfo(dbData);
        res.send(data);
    }
    catch(error) {
        console.log(error);
    }
})

app.delete('/emp/:empNo', async(req, res) => {
    let empNo = req.params.empNo;

    try {
        const empService = new EmpService();
        let data = await empService.deleteEmpInfo(empNo);
        res.send(data);
    }
    catch(e) {
        console.log(e);
    }
})