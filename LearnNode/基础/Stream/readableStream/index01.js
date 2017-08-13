/**
 * Created by dell on 2017/8/12.
 */

let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let n=0;

readStream.on('data', function (data) {
    console.log('on data:', data);

    readStream.pause();
    console.log('readStream paused');
    // n++;
    setTimeout(function () {
        //模拟异步处理
        n++;                  //最后一次处理可能在end之后进行，因为触发最后一个data事件后会立即触发end事件
        readStream.resume();
    },1000);
}).on('readable', function () {
    console.log('on readable');
}).on('end',function () {
    console.log('on end:',n);
}).on('close',function () {
    console.log('on close');
}).on('error',function () {
    console.log('on error');
});

