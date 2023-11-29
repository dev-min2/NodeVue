const express = require('express');
const app = express();

app.use(express.json( {
    limit : '50mb'
}));

app.listen(3000, () => {
    console.log('Server start');
})

app.get('/customerList', (req, res) => {
    res.send('목록 조회');
})