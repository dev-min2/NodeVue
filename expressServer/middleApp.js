const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = new express();

// application/www-form-urlencoded
const defaultParser = express.urlencoded({extended : false});

// body안에 있는 문자열 데이터를 변환(멀티파트x)
// application/json
const jsonParse = express.json();

// 미들웨어 등록
app.use(defaultParser); // 모든 요청에 해당 미들웨어 함수가 적용
app.post('/info', (req, res) => {
    res.send('welcome, ' + req.body.name);
});

// 특정 라우팅에만 미들웨어가 동작
app.post('/message', jsonParse, (req, res) => {
    res.send('MSG:, ' + req.body.message);
})


app.listen(3001, () => {
    console.log("크아아아아")
})

// session 설정
let sessionSetting = session({
    secret : 'secret key',
    resave : false,
    saveUninitialized : true,
    cookie : {
        httpOnly : true, 
        Secure : false,
        maxAge : 60000
    }
});


//CORS는 다른 origin(protocol+host+port)
app.use(sessionSetting);
const corsOptions = {
    origin : 'http://192.168.0.40:5500' // 해당 origin에 대항 응답을 허용
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    console.log(req.session);
    res.send(req.session);
})

app.post('/login', (req, res) => {
    const { id, pwd } = req.body;

    req.session.user = id;
    req.session.pwd = pwd;
    req.session.save(function(err) {
        if(err)
            throw err;
        res.redirect('/');
    })
});

app.get('/logout', (req,res) => {
    req.session.destroy();
    res.redirect('/');
})
