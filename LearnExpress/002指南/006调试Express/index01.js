/**
 * Created by w1036_000 on 2017/8/17.
 */
let express = require('express');
//首先安装debug模块   npm install debug
//运行时将DEBUG环境变量设置为express:*    linux:DEBUG=express:* node index01.js    windows:set DEBUG=express:* node index01.js
//仅查看路由器实现日志：express:router；仅查看应用程序实现日志：express:application；等
//详情参考debug模块文档
let debug = require('debug');
let app = express();

app.get('/', function (req, res) {
    debug('debug');
    res.send('hello world!');
});

app.listen(3000, function () {
    console.log('server is listening 3000');
});
