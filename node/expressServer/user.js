// route.js
// Router 클래스 - 라우트 처리를 여러개의 파일로 분리해서 구현
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('회원 조회')
});

router.post('/', (req, res) => {
    let data = req.body;
    
    console.log(data);
    res.send('회원 삽입')
});

router.put('/', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send('회원 수정');
})

router.delete('/', (req, res) => {
    let data = req.params;
    console.log(data);
    res.send('회원 삭제');
})

module.exports = router;