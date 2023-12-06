require('dotenv').config({ path : './db/mysql.env' });

const express = require('express');
const app = new express();

console.log(process.env.MYSQL_LIMIT);

const employeeDAO = require('./db/DAO/employeeDAO');
const myDto = require('./PageDTO');

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
        let empList = await employeeDAO.selectAllQuery(pageNo);
        let allAmount = await employeeDAO.selectEmployeeCount();

        console.log(allAmount[0].EMP_CNT);
        let dto = new myDto.PageDTO(allAmount[0].EMP_CNT, pageNo, 10);

        let resultData = {
            empList,
            dto
        }
        
        res.send(resultData);
    }
    catch(e) {
        console.log(e);
    }
})

app.get('/emp/:empNo', async (req, res) => {
    let empNo = req.params.empNo;
    
    let data = await employeeDAO.selectQuery(empNo);
    console.log(data);
    // js+mysql select는 pk조건 쿼리도 배열로 반환되기에 
    res.send(data[0]);
})

app.post('/emp', async(req, res) => {
    const employees = req.body.employees;
    const deptEmp = req.body.deptEmp;
    const salaryies = req.body.salaries;

    console.log(employees);
    console.log(deptEmp);
    console.log(salaryies);

    deptEmp.TO_DATE = '9999-01-01';
    salaryies.TO_DATE = '9999-01-01';
    
    try {
        let employeeRet = await employeeDAO.insertQuery(employees);
        let deptEmpRet = await employeeDAO.insertDeptEmpQuery(deptEmp);
        let salaryiesRet = await employeeDAO.insertSalaryiesQuery(salaryies);

        const returnVal = {
            employeeRet,
            deptEmpRet,
            salaryiesRet
        }
        let data = JSON.stringify(returnVal);
        res.send(data);
    }
    catch(e) {
        console.log(e);
    }
})

app.put('/emp/:empNo', async(req, res) => {
    let dbData = [req.body, req.params.empNo]
    console.log(dbData);

    try {
        let data = await employeeDAO.updateEmployeeQuery(dbData);
        res.send(data);
    }
    catch(error) {
        console.log(error);
    }
})

app.delete('/emp/:empNo', async(req, res) => {
    let empNo = req.params.empNo;

    try {
        let data = await employeeDAO.deleteEmployeeQuery(empNo);
        res.send(data);
    }
    catch(e) {
        console.log(e);
    }
})