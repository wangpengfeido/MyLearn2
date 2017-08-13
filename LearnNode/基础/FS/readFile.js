/**
 * Created by dell on 2017/8/6.
 */
let fs=require('fs');

//如果不指定编码，则返回buffer，否则返回指定编码的字符串

// fs.readFile('./test.txt','utf8',function (err, data) {
//     console.log(data);
// });

fs.readFile('./test.png',function (err, data) {
    console.log(data);
})

