/**
 * Created by dell on 2017/8/6.
 */

let buffer=require('buffer');

console.log(buffer);

let strBuf=Buffer.from('a啊');
console.log('strBuf:',strBuf);
strBuf.write('b吧剥');                                   //buffer大小为初始化大小
console.log('strBuf:',strBuf);
let base64StrBuf=Buffer.from('a啊','base64');
console.log('base64StrBuf:',base64StrBuf);              //汉字不在base64编码表中，所以省略

let arrBuf=Buffer.from([1,9,256]);                         //超过ff从0重计
console.log('arrBuf:',arrBuf,arrBuf[1]);
// console.log(arrBuf,arrBuf.length);

let sizeBuf=Buffer.alloc(5);                               //分配的buffer用0填充
console.log('sizeBuf:',sizeBuf);
sizeBuf.write('abc');
console.log('sizeBuf:',sizeBuf);
sizeBuf.write('abcdef');
console.log('sizeBuf:',sizeBuf);

let unsafeSizeBuf=Buffer.allocUnsafe(5);                   //分配的buffer保持原内存的值
console.log('unsafeSizeBuf:',unsafeSizeBuf);
unsafeSizeBuf.fill(0);
console.log('unsafeSizeBuf:',unsafeSizeBuf);

