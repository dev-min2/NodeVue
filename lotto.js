
let lottoArray = [];
let count = 5;

for(let i = 0; i < count; ++i) {
    // 1 <= x < 46
    let array = [];
    for(let j = 0; j < 6; ++j) {
        do {
            number = parseInt((Math.random() * 45) + 1);
        }while(array.indexOf(number) >= 0);
        array.push(number);
    }
    array.sort(function(a, b) { // 오름차순     
        return a - b; 
    });
    lottoArray.push(array);
}

console.log(lottoArray);