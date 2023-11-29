const timeout = setTimeout(() => {
    let today = new Date();
    console.log(`${today.getFullYear()}년${today.getMonth() + 1}월${today.getDate()}일`);
}, 1000);

let count = 0;
const interval = setInterval(() => {
    console.log('interval %d', count++);
    if(count == 5) {
        clearInterval(interval);
    }
}, 1000);

const immediate = setImmediate(() => {
    console.log('ㅎㅇ');
});

console.log('ㅋㅋ');