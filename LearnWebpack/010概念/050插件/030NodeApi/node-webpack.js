const webpack = require('webpack');
const configuration = require('./010.config');

let compiler = webpack(configuration);

// 当使用webpack api时，可以手动调用插件
new webpack.ProgressPlugin().apply(compiler);

compiler.run(function (err, stats) {

});

// 上面的操作方式和 webpack自身运行时 十分相似
// 在webpack源码中有大量这样的使用方法
