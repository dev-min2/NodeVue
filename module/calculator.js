function sum(a, b) {
    return a + b;
}

// require로 모듈을 가져와야함
module.exports = {
    //sum : sum // 내보낼 이름과 함수이름이 동일하다면 하나로적어도됨
    sum
};

