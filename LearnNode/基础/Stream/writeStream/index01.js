/**
 * Created by dell on 2017/8/12.
 */

let fs = require('fs');

let readStream = fs.createReadStream('../test_big.png');
let writeStream = fs.createWriteStream('../test2.png');

readStream.on('data', function (data) {
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
    console.log('writeStram draind and readStream will be resume');
    readStream.resume();
    console.log('readStream resumed');
});

