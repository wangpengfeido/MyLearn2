/**
 * Created by w1036_000 on 2017/8/16.
 */

let express = require('express');
let app = express();

app.use('/one', function (req, res, next) {
    console.log('this is one');
    next();          //转向下一个中间件函数
},function (req, res, next) {
    console.log('this is one again');
    next();         //转向下一个中间件函数
});

app.use('/two', function (req, res, next) {
    console.log('this is two');
    next();          //转向下一个中间件函数
},function (req, res, next) {
    console.log('this is two again');
    res.send('this is two');
    //next();         //转向下一个中间件函数，它仍然会被执行，然后出错
});

app.get('/three', function (req, res, next) {
    console.log('this is three');
    next('route');          //转向下一个路由,仅在app.METHOD或router.METHOD中有效，在app.use或router.ues中无效
},function (req, res, next) {
    console.log('this is three again');
    res.send('this is three');
});

app.use(function (req, res) {
    res.send('response all');
});



app.listen(3000, function () {
    console.log('server is listening 3000');
});

