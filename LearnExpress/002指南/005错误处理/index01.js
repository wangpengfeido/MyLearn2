/**
 * Created by w1036_000 on 2017/8/17.
 */

let express = require('express');
let app = express();

app.get('/one', function (req, res) {
    throw 'error';  //转到错误处理中间件
    res.send('hello');  //未执行
});
//错误处理中间件有四个参数
//错误处理中间件必须在最后装入
//错误处理中间件必须使用app.use方法，app.METHOD无效
app.use('/one', function (err, req, res, next) {
    console.log('error one handled', err);
    res.sendStatus(500);
});

app.get('/two', function (req, res) {
    next('hello');        //为next方法设置非route的参数将会导致错误
}, function (req, res) {
    console.log('hello');
});
app.get('/two', function (req, res) {
    res.send('ok');
});
app.use('/two', function (err, req, res, next) {
    console.log('error two handled', err);
    res.sendStatus(500);
});

app.get('/three', function (req, res) {
    next('err');
});
//可以设置多个错误处理程序
app.use('/three', function (err, req, res, next) {
    console.log('error three handled');
    next(err);   //将err继续向下传递
});
app.use('/three', function (err, req, res, next) {
    console.log('error three handled again');
    res.sendStatus(500);
});

//express带有缺省错误处理程序
app.get('/four', function (req, res) {
    next('err');
});


app.listen(3000, function () {
    console.log('server is listening 3000');
});

