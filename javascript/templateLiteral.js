
let message = 10;
let date =  new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let msg = `${year}년
${month}월
${day}일`;

console.log(msg);