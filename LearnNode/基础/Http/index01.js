/**
 * Created by dell on 2017/3/27.
 */
const http=require('http');

const port=3000;

const server=http.createServer(function (incommingMessage, serverResponse) {
    serverResponse.statusCode=200;
    serverResponse.end('hello world');
});
server.listen(port,function () {
    console.log(`server is run at port:${port}`);
});

