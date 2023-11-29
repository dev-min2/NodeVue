//!ㅋㅋ!
let userListQuery = `SELECT * FROM T_USERS`;
let userQuery = `SELECT * FROM T_USERS WHERE USER_NO = ?`;
// ? 에 객체가 대응되어야함 (객체의 변수명이 칼럼에 대응되어야함)
let userInsertQuery = 'INSERT INTO T_USERS SET ?';
let userUpdateQuery = 'UPDATE T_USERS SET ? WHERE USER_NO = ?';
let userDeleteQuery = 'DELETE FROM T_USERS WHERE USER_NO = ?'


module.exports = {
    userListQuery,
    userInsertQuery,
    userUpdateQuery,
    userDeleteQuery,
    userQuery
}