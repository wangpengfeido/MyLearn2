const path = require('path');
const webpack = require('webpack');

let config = {
    entry: {
        main: './src/01.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
};

// 可以在webpack cli中使用 --mode=xxx 参数来指定mode
// 此时可以使用导出函数的方式，来根据mode来改变webpack的其他行为

module.exports = (env, argv) => {

    console.log('mode:', argv.mode);
    if (argv.mode === 'production') {
        // config.xxx=xxx;
    }

    return config;
};


