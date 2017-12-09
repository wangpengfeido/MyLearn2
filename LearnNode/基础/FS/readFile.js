/**
 * Created by dell on 2017/8/6.
 */
let fs=require('fs');

//如果不指定编码，则返回buffer，否则返回指定编码的字符串

// fs.readFile('./test.txt','utf8',function (err, data) {
//     console.log(data);
// });

/*
* fs.readFile(path[, options], callback)
* 异步读取一个文件的全部内容
* callback:<Function>    err:<Error>    data:<Buffer>|<String>
* */
fs.readFile('./test.png',function (err, data) {
    console.log(data);
});

