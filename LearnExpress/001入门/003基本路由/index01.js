/**
 * Created by w1036_000 on 2017/8/15.
 */

let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('handled a get request');
});

app.post('/', function (req, res) {
    res.send('handled a post request');
});

app.put('/', function (req, res) {
    res.send('handled a put request');
});

app.delete('/', function (req, res) {
    res.send('handled a delete request');
});

app.listen(3000, function () {
    console.log('server is listening 3000');
});


