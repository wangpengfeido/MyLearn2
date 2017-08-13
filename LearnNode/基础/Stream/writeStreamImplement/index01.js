/**
 * Created by dell on 2017/8/13.
 */

let stream = require('stream');

let readStream = new stream.Readable();
let writeStream = new stream.Writable();

readStream.push('hello ');
readStream.push('world!');
readStream.push(null);

writeStream._write = function (chunk, encode, callback) {
    console.log(chunk);
    callback();
};

readStream.pipe(writeStream);

