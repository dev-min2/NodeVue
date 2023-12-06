const employeeDAO = require('../db/DAO/employeeDAO');

const myDto = require('../PageDTO');
class EmpService {
    constructor() {

    }

    async getAllEmpList(pageNo) {
        let empList = await employeeDAO.selectAllQuery(pageNo);
        let allAmount = await employeeDAO.selectEmployeeCount();
        console.log(empList);
        console.log(allAmount);
        let dto = new myDto.PageDTO(allAmount[0].EMP_CNT, pageNo, 10);

        return {
            empList,
            dto
        }   
    }

    async getEmpInfo(empNo) {
        let empInfo = await employeeDAO.selectQuery(empNo);
        return empInfo[0];
    }

    async saveEmp(employees, deptEmp, salaryies) {
        deptEmp.TO_DATE = '9999-01-01';
        salaryies.TO_DATE = '9999-01-01';

        const conn = await employeeDAO.getConnection();
        let data = '';
        console.log(conn);
        try {
            await conn.beginTransaction();
            let employeeRet = await employeeDAO.insertQuery(employees,conn);
            let deptEmpRet = await employeeDAO.insertDeptEmpQuery(deptEmp,conn);
            let salaryiesRet = await employeeDAO.insertSalaryiesQuery(salaryies,conn);

            const returnVal = {
                employeeRet,
                deptEmpRet,
                salaryiesRet
            }
            data = JSON.stringify(returnVal);
            await conn.commit(); // 커밋
        }
        catch(err) {
            console.log(err);
            await conn.rollback();
        }
        finally {
            conn.release();
        }
        return data;
    }

    async modifyEmpInfo(dbData) {
        let result = await employeeDAO.updateEmployeeQuery(dbData);
        return result;
    }
    async deleteEmpInfo(empNo) {
        await employeeDAO.deleteEmployeeQuery(empNo);
    }
}

module.exports = EmpService;