/**
 * Created by dell on 2017/8/10.
 */

let fs=require('fs');

let content=fs.readFileSync('./test.png');

// console.log(content);

fs.writeFileSync('./test2.png',content);

