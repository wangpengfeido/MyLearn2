/**
 * Created by w1036_000 on 2017/8/16.
 */

let express = require('express');

//路由器层中间件的工作方式与应用层中间件基本相同，差异之处在于它绑定到 express.Router() 的实例。
let router = express.Router();
router.use(function (req, res, next) {
    res.send('response for all');
});


let app = express();
app.use(router);
app.listen(3000, function () {
    console.log('server is listening 3000');
});


