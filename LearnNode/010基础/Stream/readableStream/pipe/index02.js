/**
 * Created by dell on 2017/8/13.
 */

let fs = require('fs');

/*
* readable.pipe(destination[, options])
* 将一个可写流关联到一个可读流，可读流自动切换到流动模式并将其数据全部推到可写流，过程自动进行，可写流buffer不会爆炸
* destination：<stream.Writable>
* */
fs.createReadStream('../../test.png').pipe(fs.createWriteStream('../../test2.png'));

