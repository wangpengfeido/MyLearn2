/**
 * Created by w1036_000 on 2017/8/16.
 */

let express = require('express');


let router = express.Router();
router.use(function timeLog(req, res, next) {
    console.log(Date.now());
    next();
});

router.get('/', function (req, res) {
    res.send('birds home page');
});
router.get('/about', function (req, res) {
    res.send('about birds');
});


let app = express();
app.use(router);
app.listen(3000,function () {
    console.log('server is listening 3000');
});

