// 라우띵
const express = require('express');
const fs = require('fs');
const router = require('./user');
const app = express();

// 등록할 라우터에 부여할 도메인 등록이 가능함.
app.use('/user', router); 
app.use('/public', express.static('images'));

// 미들웨어
// app.use(function(err, req, res, next) {
//     res.status(500).json({statusCode: res.statusCode, errMessage : err.message});
// });

app.get('/error', (req, res, next) => {
    next(new Error('Process Fail! Check data하'));
});

let db = JSON.parse(fs.readFileSync('db.json','utf8'));
const getData = (target, where) => {
    let data = db[target];
    if(Array.isArray(data)) {
        let lst = data;
        for(let obj of lst) {
            if(obj.id == where) {
                data = obj;
                break;
            }
        }
    }
    return data;
}

app.get('/', (req, res) => {
    res.send("Server Connect");
})

app.get('/posts', (req, res) => {
    let data = getData('posts');
    res.send(data);
})

// 레스트방식의 경로처리 :(와일드카드) + 변수명
app.get('/posts/:id', (req, res) => {
    let data = getData('posts', req.params.id);
    res.send(data);
})

app.get('/comments', (req, res) => {
    let kinggodminkyo = getData('comments');
    res.send(kinggodminkyo);
})

app.get('/comments/:id', (req, res) => {
    let king = getData('comments',req.params.id);
    res.send(king);
})

app.get('/', (req, res) => {
    res.contentType('text/plain');
    res.send('Server Connect');
});

app.get('/profile', (req, res ) => {
    let s = getData('profile');
    res.send(s);
})

app.listen(3000, () => {
    console.log("Listen...");
});

// 라우팅 -> 요청 url이 들어올 때 처리할 핸들러를 연결하는 것
// get조회를 단건/전체로 나누기 힘듬
app.route('/emps')
.get((req,res) => {
    res.send('사원 get')
})
.post((req,res) => {
    res.send('사원 등록ㅋ')
})
.put((req,res) => {
    res.send('사원 업뎃ㅋ')
})
.delete((req,res) => {
    res.send('사원삭제');
})