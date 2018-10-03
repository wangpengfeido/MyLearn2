/**
 * Created by dell on 2017/8/9.
 */

let buf=Buffer.from('hello world!');
console.log('base64:',buf.toString('base64'));
console.log('hex:',buf.toString('hex'));
console.log('utf8:',Buffer.from('aGVsbG8gd29ybGQh','base64').toString('utf8'));
console.log('utf8:',Buffer.from('68656c6c6f20776f726c6421','hex').toString());



