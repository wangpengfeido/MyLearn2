/**
 * Created by dell on 2017/3/27.
 */
const http=require('http');

const port=3000;

const server=http.createServer(function (req, res) {
    res.statusCode=200;
    res.end('hello world');
});
server.listen(port,function () {
    console.log(`server is run at port:${port}`);
});

