/**
 * Created by dell on 2017/8/10.
 */

let fs=require('fs');

/*
* fs.readFileSync(path[, options])
* fs.readFile()的同步版本，返回path所对应文件的内容
* */
let content=fs.readFileSync('./test.png');

// console.log(content);

/*
* fs.writeFileSync(file, data[, options])
* fs.writeFile()的异步版本，返回undefined
* */
fs.writeFileSync('./test2.png',content);

