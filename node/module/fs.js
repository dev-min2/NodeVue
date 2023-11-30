const fs = require('fs');

// 동기식
const data = '집에가고싶다';
const ret = fs.writeFileSync('./stdout.log',data,'utf8');

const readFile = fs.readFileSync('./stdout.log','utf8');
console.log(readFile);

// 비동기식
async function asyncTest() {
    const asyncData = '집좀가자';
    await fs.writeFile('./stdout.log',asyncData,'utf8',(err) => {
        if(err)
            throw err;
        console.log('비동기 파일쓰기 완료');
    })

    await fs.readFile('./stdout.log','utf8',(err, data) => {
        if(err) {
            throw err;
        }

        console.log('비동기 데이터 읽기');
        console.log(data);
    })
}

asyncTest();