// 전체조회
fetch('http://localhost:3000/posts')
.then(resolve => resolve.json())
.then(result => console.log(result))
.catch(err => console.log(err));
// 단건조회
fetch('http://localhost:3000/posts/1')
.then(resolve => resolve.json())
.then(result => console.log(result))
.catch(err => console.log(err));

// fetch('http://localhost:3000/posts', {
//     method: 'post',
//     headers : {
//         'content-type' : 'application/json'
//     },
//     body : JSON.stringify({
//         userId : 2,
//         id: 4,
//         title : 'GodMinKyo',
//         body: 'GodKyoMin'
//     })
// })
// .then(resolve => resolve.json())
// .then(result => console.log('insertData', result));

//수정
// fetch('http://localhost:3000/posts/4', {
//     method: 'put',
//     headers : {
//         'content-type' : 'application/json'
//     },
//     // 수정하고자 하는 데이터를 보냄
//     body : JSON.stringify({
//         userId : 2,
//         title : 'GodMinKyoKing',
//         body: 'KingGodKyoMin'
//     })
// })
// .then(resolve => resolve.json())
// .then(result => console.log('updateData', result));


fetch('http://localhost:3000/posts/4', {
    method: 'delete'
})
.then(resolve => resolve.json())
.then(result => console.log('delete', result));
