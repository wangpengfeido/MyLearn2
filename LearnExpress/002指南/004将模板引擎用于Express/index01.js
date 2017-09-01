/**
 * Created by w1036_000 on 2017/8/17.
 */

let express = require('express');
let app = express();

//设置模板所在目录
app.set('views', './');
//设置模板引擎
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    //如果未设置模板引擎则必须书写文件扩展名，设置了则可以省略
    res.render('index01', {title: "模板引擎", message: "模板引擎"});
});

app.listen(3000,function () {
    console.log('server is listening 3000');
});

