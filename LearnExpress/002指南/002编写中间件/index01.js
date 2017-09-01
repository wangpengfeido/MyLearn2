/**
 * Created by w1036_000 on 2017/8/16.
 */

let express = require('express');
let app = express();

//中间件函数
let myLogger = function (req, res, next) {
    console.log('logged');
    next();        //如果不调用next请求将被挂起
};
let requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};


//装入中间件函数
//中间件装入顺序很重要：首先装入的中间件函数也首先被执行。
//如果在路由之后装入中间件，那么请求永远都不会到达该中间件函数，因为根路径的路由处理程序终止了请求/响应循环。
app.use(myLogger);
app.use(requestTime);

app.get('/', function (req, res) {
    res.send('hello world!' + ',' + req.requestTime);
});

app.listen(3000, function () {
    console.log('server is listening 3000');
});



