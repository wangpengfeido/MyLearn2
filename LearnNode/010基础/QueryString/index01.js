/**
 * Created by dell on 2017/3/28.
 */
const queryString=require('querystring');

console.log(queryString.escape('<你好世界>'));
console.log(queryString.unescape('%3C%E4%BD%A0%E5%A5%BD%E4%B8%96%E7%95%8C%3E'));
console.log(queryString.parse('a=aa&b=bb'));
console.log(queryString.stringify({ a: 'aa', b: 'bb' }));