let obj = {
    id : 100,
    name : 'Hong',
    birth: '1999-12-25'
}
let {name, id, anything} = obj;
console.log(name, id, anything);

let test = ['전민교','강현진','박경식'];
// array기반 인덱스는 무조건 앞에서부터 분해
let [x,y,z] = test;
console.log(x,y,z);

// destructing을 이용해 모듈의 필요한 부분만 가져오기
module.export = {
    object : {},
    method : function() {}
}

let { method } = module;