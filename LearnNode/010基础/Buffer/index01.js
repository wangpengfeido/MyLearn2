/**
 * Created by dell on 2017/8/6.
 */
/*
* Buffer不需要require，它是buffer模块中的一个构造器函数
* buffer中的每个值为8位即00-ff
* */

let buffer=require('buffer');

console.log(buffer);

/*
* Class Method: Buffer.from(string[, encoding])
* 从字符串生成一个buffer，长度由字符串决定
* encoding：编码，默认，utf-8
* 如果字符不在编码范围内，则会省略，参考下例
* */
let strBuf=Buffer.from('a啊');
console.log('strBuf:',strBuf);

/*
* buf.write(string[, offset[, length]][, encoding])
* 写入buffer，会覆盖原来的值，如果长度超过buffer长度则会省略
* offst：偏移值，默认0
* */
strBuf.write('b吧剥');                                   //buffer大小为初始化大小
console.log('strBuf:',strBuf);

let base64StrBuf=Buffer.from('a啊b','base64');
console.log('base64StrBuf:',base64StrBuf);              //汉字不在base64编码表中，所以省略

/*
* Class Method: Buffer.from(array)
* 由数组生成一个buffer，如果值超过ff，则从00重计
* */
let arrBuf=Buffer.from([1,9,256]);                         //超过ff从0重计
console.log('arrBuf:',arrBuf,arrBuf[1]);
console.log(arrBuf,arrBuf.length);

/*
* Class Method: Buffer.alloc(size[, fill[, encoding]])
* 生成指定长度的buffer，其值用00填充
* */
let sizeBuf=Buffer.alloc(5);                               //分配的buffer用0填充
console.log('sizeBuf:',sizeBuf);
sizeBuf.write('abc');
console.log('sizeBuf:',sizeBuf);
sizeBuf.write('abcdef');
console.log('sizeBuf:',sizeBuf);

/*
* Class Method: Buffer.allocUnsafe(size)
* 生成指定长度的buffer，保持原内存的值
* */
let unsafeSizeBuf=Buffer.allocUnsafe(5);                   //分配的buffer保持原内存的值
console.log('unsafeSizeBuf:',unsafeSizeBuf);
unsafeSizeBuf.fill(0);
console.log('unsafeSizeBuf:',unsafeSizeBuf);

