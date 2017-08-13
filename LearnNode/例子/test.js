/**
 * Created by dell on 2017/8/13.
 */
let http = require('http');

http.request('http://img.mukewang.com/580764720001c14e01000100-100-100.jpg',function (incommingMessage) {
    console.log('success');
   incommingMessage.on('data',function (data) {
      console.log('.............',data);
   });
}).on('error',function () {
    console.log('error');
});