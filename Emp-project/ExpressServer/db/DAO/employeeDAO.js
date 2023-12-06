let pool = require('../db');

// 쿼리문 만들기
let employeeDAO = {
    query : function(sql, values) {
        return new Promise((resolve,reject) => {
            pool.query(sql, values, (err, results) => {
                if(err) {
                    reject( { err } );
                }
                else {
                    resolve(results);
                }
            })
        })
    },
    getConnection : async function() {
        return pool.promise().getConnection(); // 이렇게해야만 커넥션 얻더라..
    },
    insertQuery : async function(values,conn) {
        if(conn != null && (typeof conn != "undefined")) {
            console.log('insertQuery Connection')
            return conn.query('INSERT INTO EMPLOYEES SET ?', values)
        }
        else 
            return this.query('INSERT INTO EMPLOYEES SET ?', values);
    },
    insertDeptEmpQuery : async function(values,conn) {
        if(conn != null && (typeof conn != "undefined")) {
            console.log('insertDeptEmpQuery Connection')
            return conn.query('INSERT INTO DEPT_EMP SET ?', values)
        }
        else 
            return this.query('INSERT INTO DEPT_EMP SET ?', values);
    },
    insertSalaryiesQuery : async function(values,conn) {
        if(conn != null && (typeof conn != "undefined")) {
            console.log('insertSalaryiesQuery Connection')
            return conn.query('INSERT INTO SALARIES SET ?', values)
        }
        else
            return this.query('INSERT INTO SALARIES SET ?', values);
    },
    selectAllQuery : async function(curPage) {
                //let pageDTO = new pageDTO();
        let selectAllQuery = 'SELECT A.EMP_NO, A.FIRST_NAME, A.LAST_NAME, A.GENDER, A.HIRE_DATE, D.SALARY, C.DEPT_NO, C.DEPT_NAME FROM EMPLOYEES AS A JOIN DEPT_EMP AS B ON A.EMP_NO = B.EMP_NO JOIN DEPARTMENTS AS C ON B.DEPT_NO = C.DEPT_NO JOIN SALARIES AS D ON A.EMP_NO = D.EMP_NO WHERE B.TO_DATE = CAST("9999-01-01" AS DATE) AND D.TO_DATE = CAST("9999-01-01" AS DATE) ORDER BY A.EMP_NO DESC LIMIT ' + (curPage - 1) * 10 + ' , 10';
        return this.query(selectAllQuery);
    },
    selectQuery : async function(empNo) {
        let selectQuery = 'SELECT A.EMP_NO, A.BIRTH_DATE, A.FIRST_NAME, A.LAST_NAME, A.GENDER, A.HIRE_DATE, D.SALARY, C.DEPT_NO, C.DEPT_NAME FROM EMPLOYEES AS A JOIN DEPT_EMP AS B ON A.EMP_NO = B.EMP_NO JOIN DEPARTMENTS AS C ON B.DEPT_NO = C.DEPT_NO JOIN SALARIES AS D ON A.EMP_NO = D.EMP_NO WHERE B.TO_DATE = CAST("9999-01-01" AS DATE) AND D.TO_DATE = CAST("9999-01-01" AS DATE) AND A.EMP_NO =' + empNo;
        return this.query(selectQuery);
    },
    selectEmployeeCount : async function() {
        let countQuery = "SELECT COUNT(*) AS EMP_CNT FROM employees"
        return this.query(countQuery);
    },
    updateEmployeeQuery : async function(data) {
        let updateQuery = `
            UPDATE EMPLOYEES
                SET ?
                WHERE EMP_NO = ?
        `;

        return this.query(updateQuery,data);
    },
    deleteEmployeeQuery : async function(empNo) {
        let deleteQuery = `
            UPDATE DEPT_EMP
                SET TO_DATE = SYSDATE()
                WHERE EMP_NO = ?
        `

        return this.query(deleteQuery, empNo);
    }
};

module.exports = employeeDAO;