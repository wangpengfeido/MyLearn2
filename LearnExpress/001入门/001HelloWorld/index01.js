/**
 * Created by w1036_000 on 2017/8/15.
 */
let express=require('express');
let app=express();

app.get('/',function (req,res) {
    res.send('hello world!');
});

app.listen(3000,function () {
   console.log('server is listening 3000');
});


