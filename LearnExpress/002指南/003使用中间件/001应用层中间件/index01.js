/**
 * Created by w1036_000 on 2017/8/16.
 */

let express = require('express');
let app = express();

app.use('/one', function (req, res) {
    res.send('one');
});

app.use(function (req, res) {
    res.send('response all');
});

app.get('/two', function (req, res) {
    //由于先装入的中间件先执行，所以它永远不会被执行
    res.send('two');
});


app.listen(3000, function () {
    console.log('server is listening 3000');
});
