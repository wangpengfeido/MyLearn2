/**
 * Created by w1036_000 on 2017/8/15.
 */

let express=require('express');
let app=express();

app.get('/',function (req,res) {
    res.send('get method');
});

//匹配所有请求方法
app.all('/all',function (req,res) {
    res.send('handle every method');
});

app.listen(3000,function () {
    console.log('server is listening 3000');
});
