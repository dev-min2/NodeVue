//const calModule = require('./calculator.js');
//console.log(calModule.sum(10,20));

// require는 object를 반환(destructing을 통해 모듈의 원하는 객체만 가져올 수 있음)
const { sum } = require('./calculator.js');
console.log(sum(10,20));