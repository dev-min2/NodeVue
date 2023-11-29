let names = ["Hong", "Kang", "Adward", "Lee"];
names.sort();

console.log(names);

let nums = [40, 100, 1, 5, 25, 10];
console.log(nums);
nums.sort( (a, b) => {
    return a - b;
});

console.log(nums);

let newNums = nums.filter((obj) => {
    return obj > 50
});

console.log(newNums);