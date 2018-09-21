/**
 * Created by dell on 2017/8/12.
 */

let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let writeStream = fs.createWriteStream('../test_big_gen.png');

readStream.on('data', function (data) {
    /*
    * writable.write(chunk[, encoding][, callback])
    * 写入数据到流
    * 如果内部buffer小于警戒高值返回true。如果返回false，则不应该继续写入数据，并且drain事件将会被触发
    * */
    if (writeStream.write(data) === false) {
        //防止写缓存爆炸
        readStream.pause();
        console.log('readStream paused');
    }
});
readStream.on('end', function () {
    writeStream.end();
});
writeStream.on('drain', function () {
    /*
     * Class: stream.WriteStream -> Event: 'drain'
     * 当writeStream.write(chunk)返回false时执行
     * */

    console.log('writeStram draind and readStream will be resume');
    readStream.resume();
    console.log('readStream resumed');
});

