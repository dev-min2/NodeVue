let array = [1,2,3];
let string = "Hello";

//array.push(...string);
//console.log(array);
let newArray = [...array, ...string];
console.log(newArray);