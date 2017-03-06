/**
 * Created by dell on 2017/3/4.
 */
require("!style-loader!css-loader!./cssModule01.css");

var moduleOne=require('./module01');

document.write('hello world');
document.write(moduleOne);