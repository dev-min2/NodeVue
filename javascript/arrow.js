const message = function (msg) {
    return "msg : " + msg;
}

console.log(message("집가고싶어."));
// 이름과 매개변수가 같은 함수 선언식은 이후에 배치된 함수로 덮어씌워짐

const arrHello = (name) => {
    return "hello, " + name;
}
const arrHello2 = name => "hello2, " + name;
console.log(arrHello2("아"));

// 화살표함수는 this가 window객체.