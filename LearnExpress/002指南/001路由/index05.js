/**
 * Created by w1036_000 on 2017/8/16.
 */

let express = require('express');
let app = express();

app.route('/a').get(function (req, res) {
    res.send('get');
}).post(function (req, res) {
    res.send('post');
});


app.listen(3000, function () {
    console.log('server is listening 3000');
});


