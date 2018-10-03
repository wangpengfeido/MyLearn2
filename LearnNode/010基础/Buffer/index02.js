/**
 * Created by dell on 2017/8/8.
 */

let buf=Buffer.from('hello world!');
console.log(buf,buf.toString());

buf.write('hiiiii',2,3);
console.log('written buf:',buf,buf.toString());

//buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
let copiedBuf=Buffer.alloc(10);
buf.copy(copiedBuf,1,2,4);
console.log('copiedBuf:',copiedBuf,copiedBuf.toString());

//buf.slice([start[, end]])
let slicedBuf=buf.slice(6,12);
console.log('sliced buf:',slicedBuf,slicedBuf.toString());

//buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])
//相同返回0；target在source之前返回1；之后返回-1
console.log('compare:',buf.compare(buf));
console.log('compare:',buf.compare(Buffer.from('a')));

// buf.equals(otherBuffer)
console.log('equals:',buf.equals(Buffer.from('hehii world!')));
console.log('equals:',buf.equals(Buffer.from('aaa')));

//buf.fill(value[, offset[, end]][, encoding])
//改变原buffer，返回buffer的引用
console.log('fill:',buf.fill(0),buf);
