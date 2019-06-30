// data方法可设置data-*属性

const dom_test=$('.test');

// 一开始带在dom属性上的
console.log('origin:',dom_test.data('origin'));

// 字符串
dom_test.data('str','aaa');
console.log('str:',dom_test.data('str'));

// json。将被解析成一个对象
dom_test.data('json',JSON.stringify({a:'aaa'}));
console.log('json:',dom_test.data('json'));



