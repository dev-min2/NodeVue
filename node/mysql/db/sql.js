//!ㅋㅋ!
let customerListQuery = `SELECT * FROM customers`;
let customerQuery = `SELECT * FROM customers WHERE ID = ?`;
// ? 에 객체가 대응되어야함 (객체의 변수명이 칼럼에 대응되어야함)
let customerInsertQuery = 'INSERT INTO CUSTOMERS SET ?';
let customerUpdateQuery = 'UPDATE CUSTOMERS SET ? WHERE ID = ?';
let customerDeleteQuery = 'DELETE FROM CUSTOMERS WHERE ID = ?'


module.exports = {
    customerList : customerListQuery,
    customerInsertQuery,
    customerUpdateQuery,
    customerDeleteQuery,
    customerQuery
}