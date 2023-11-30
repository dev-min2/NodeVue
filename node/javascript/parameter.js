function printMsg(msg = '메세지를 입력해주세요') {
    console.log(msg);
}

printMsg();
function sum(x, y, ...args) {
    let result = x + y;
    console.log(args.length);
    for(let num of args) {
        result += num;
    }

    return result;
}

let res = sum(1,2, 3,4,5,6,7,8,9,10);
console.log(res);