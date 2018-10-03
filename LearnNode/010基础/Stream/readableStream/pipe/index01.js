/**
 * Created by dell on 2017/8/12.
 */

let http = require('http');
let fs = require('fs');

http.createServer(function (incommingMessage, serverResponse) {

    // fs.createReadStream('../../test.png').pipe(serverResponse);

    // http.get('http://www.imooc.com/static/img/index/logo_new.png', function (incommingMessage) {
    //     incommingMessage.pipe(serverResponse);
    // });



}).listen(8090, function () {
    console.log('server is listening');
});



