/**
 * Created by dell on 2017/8/13.
 */

let stream = require('stream');
let util = require('util');

function ReadStream() {
    stream.Readable.call(this);
}
util.inherits(ReadStream, stream.Readable);
ReadStream.prototype._read = function (size) {
    this.push('hello ');
    this.push('world!');
    this.push(null);
};

function WriteStream() {
    stream.Writable.call(this);
    // this._cached = Buffer.from('');
}
util.inherits(WriteStream, stream.Writable);
WriteStream.prototype._write = function (chunk, encode, callback) {
    console.log(chunk.toString('utf8'));
    callback();
};

function TransformStream() {
    stream.Transform.call(this);
}
util.inherits(TransformStream, stream.Transform);
TransformStream.prototype._transform = function (chunk, encode, callback) {
    this.push(chunk);
    callback();
};
TransformStream.prototype._flush = function (callback) {
    this.push('haha');
    callback;
};


let rs = new ReadStream();
let ws = new WriteStream();
let ts = new TransformStream();
rs.pipe(ts).pipe(ws);

