let words = ["spray","limit","elite","exuberant","paresent"];

let result = words.filter((word, idx, array) => {
    return word.length > 6;
});

console.log(result);

let users = [
    {
        id : 100,
        name : 'Hong'
    },
    {
        id : 200,
        name : 'Kang'
    },
    {
        id : 300,
        name : 'Lee'
    }
];

// 새로운 데이터로 map(mapping)하여 배열반환. 기존 배열길이 유지.
let newUser = users.map((obj) => {
    return {
        id : obj.id,
        name : obj.name,
        grade : obj.id >= 200 ? 'VIP' : '일반'
    };
})

console.log(newUser);