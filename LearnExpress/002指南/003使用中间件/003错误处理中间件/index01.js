/**
 * Created by w1036_000 on 2017/8/17.
 */

let express = require('express');
let app = express();

app.get('/', function (req, res) {
    next('err');
});

//详见错误处理
app.use('/', function (err, req, res, next) {
    res.send('error is handele');
});

app.listen(3000, function () {
    console.log('server is listening 3000');
});



