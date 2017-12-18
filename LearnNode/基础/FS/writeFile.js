/**
 * Created by dell on 2017/8/6.
 */
let fs=require('fs');

// fs.writeFile('./test.txt','B吧','utf8',function (err) {
//     if(err){
//         throw err;
//     }
// });

/*
* fs.writeFile(file, data[, options], callback)
* 写入数据到一个文件，如果文件已存在，则将被替换
* */
fs.writeFile('./test.txt',Buffer.from('B吧'),'utf8',function (err) {
    if(err){
        throw err;
    }
});


