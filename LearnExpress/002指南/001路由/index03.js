/**
 * Created by w1036_000 on 2017/8/15.
 */

let express = require('express');
let app = express();

//路由处理程序可以是一个函数，多个函数，一组函数，或两者的结合
//处理程序详情请查看，使用中间件

app.get('/a', function (req, res) {
    res.send('this is a');
});

app.get('/b', function (req, res) {
    console.log('this is first b');
}, function (req, res) {
    console.log('this is second b');
    res.send('this is b');
});

app.get('/c', [function (req, res) {
    console.log('this is first c');
}, function (req, res) {
    console.log('this is second c');
    res.send('this is c');
}]);

app.get('/d', function (req, res) {
    console.log('this is first d');
    res.send('this is d');
},[function (req, res) {
    console.log('this is second d');
}, function (req, res) {
    console.log('this is second d');
}]);

app.listen(3000, function () {
    console.log('server is listening 3000');
});



