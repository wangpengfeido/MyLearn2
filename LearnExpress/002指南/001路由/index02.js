/**
 * Created by w1036_000 on 2017/8/15.
 */

let express=require('express');
let app=express();

//路由路径可以是字符串、字符串模式或正则表达式。


app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});

app.get(/a/, function(req, res) {
    res.send('/a/');
});

app.listen(3000,function () {
    console.log('server is listening 3000');
});


