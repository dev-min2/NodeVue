

const path = require('path');
const process = require('process');

console.log('== 절대경로');
console.log(__filename);
console.log(__dirname);
console.log(path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자: %s', path.extname(__filename));

let pathList = process.env.PATH.split(path.delimiter);
console.log(path.delimiter, pathList);
console.log('');
console.log(path.sep, pathList[0].split(path.sep));


