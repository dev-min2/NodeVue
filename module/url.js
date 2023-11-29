// 레거시 url방법
const url = require('url');
const parse = url.parse("http://127.0.0.1:8080/PetGoodsProject/search/productDetail?pno=10&type=0");

console.log(parse);
let queryString = parse.query;
let queryArray = queryString.split('&');
console.log(queryArray);

// whatwg방법
let whatwg = new URL("http://127.0.0.1:8080/PetGoodsProject/search/productDetail?pno=10&type=0");
console.log(whatwg);
console.log(whatwg.searchParams);

for(let obj of whatwg.searchParams) {
    console.log('parameterName : ' + obj[0]);
    console.log('parameterValue : ' + obj[1]);

    console.log('-----------------------------');
}

// origin(protocol+auth+host)
// 
