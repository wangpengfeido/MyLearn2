/**
 * Created by w1036_000 on 2017/8/15.
 */

let express = require('express');
let app = express();

app.use(express.static('aaa'));

//创建虚拟路径前缀
app.use('/static', express.static('aaa'));

app.listen(3000, function () {
    console.log('server is listening 3000');
});
