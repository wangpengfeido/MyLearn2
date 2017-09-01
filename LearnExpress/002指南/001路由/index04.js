/**
 * Created by w1036_000 on 2017/8/15.
 */

let path = require('path');

let express = require('express');
let app = express();

app.get('/none', function (req, res) {
    console.log('none');
});

app.get('/download', function (req, res) {
    console.log('download');
    res.download('test.png', 'aaa.png');
});

app.get('/end', function (req, res) {
    console.log('end');
    res.end();
});

app.get('/json', function (req, res) {
    console.log('json');
    res.json({a: 'aaa'});
});

app.get('/jsonp', function (req, res) {
    console.log('jsonp');
    res.jsonp({a: 'aaa'});
});

app.get('/redirect', function (req, res) {
    console.log('redirect');
    res.redirect('/send');
});

app.get('/render', function (req, res) {
    console.log('render');
    //需要模板引擎
    //res.render('view');
});

app.get('/send', function (req, res) {
    console.log('send');
    res.send('send');
});

app.get('/sendFile', function (req, res) {
    console.log('sendFile');
    res.sendFile(path.join(__dirname,'./test.png'));
});

app.get('/sendStatus', function (req, res) {
    console.log('sendStatus');
    //相当于res.status(403).send('Forbidden')
    res.sendStatus(403);
});


app.listen(3000, function () {
    console.log('server is listening 3000');
});