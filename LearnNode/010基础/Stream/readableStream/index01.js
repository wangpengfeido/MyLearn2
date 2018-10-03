/**
 * Created by dell on 2017/8/12.
 */

let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let n = 0;

readStream.on('data', function (data) {
    /*
     * Class: stream.Readable -> Event: 'data'
     * 当流让渡数据块的所有权到用户时触发。
     * chunk <Buffer>|<String>|<any>
     * */

    console.log('on data:', data);

    /*
    * readable.pause()
    * 使一个处在流动模式的流切换出流动模式，并停止触发'data'事件
    * */
    readStream.pause();
    console.log('readStream paused');
    // n++;
    setTimeout(function () {  //模拟异步处理
        n++;                  //最后一次处理可能在end之后进行，因为触发最后一个data事件后会立即触发end事件
        /*
        * readable.resume()
        * 将一个可读流切换到流动模式，并继续触发'data'事件
        * */
        readStream.resume();
    }, 1000);
}).on('readable', function () {
    /*
    * Class: stream.Readable -> Event: 'readable'
    * 当可读流中有数据可读时触发该事件
    * */
    console.log('on readable');
}).on('end', function () {
    console.log('on end:', n);
}).on('close', function () {
    console.log('on close');
}).on('error', function () {
    console.log('on error');
});

