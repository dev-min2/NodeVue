const express = require('express');
const empRouter = express.Router();

empRouter.use(express.json({
    limit: '50mb'
}))

//const employeeDAO = require('./db/DAO/employeeDAO');
const EmpService = require('../Service/EmpService');
// index.html파일을 보냄
// app.get('/', async (req, res) => {
//     res.sendFile('/dist/index.html');
// })
empRouter.get('/', async (req, res) => {
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


empRouter.get('/:empNo', async (req, res) => {
    let empNo = req.params.empNo;
    
    const empService = new EmpService();
    let data = await empService.getEmpInfo(empNo);
    res.send(data);
})

empRouter.post('/', async(req, res) => {
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

empRouter.put('/:empNo', async(req, res) => {
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

empRouter.delete('/:empNo', async(req, res) => {
    let empNo = req.params.empNo;
    let date = req.body.to_date;

    let dbData = [date,empNo];
    try {
        const empService = new EmpService();
        let data = await empService.deleteEmpInfo(dbData);
        res.send(data);
    }
    catch(e) {
        console.log(e);
    }
})

module.exports = empRouter;