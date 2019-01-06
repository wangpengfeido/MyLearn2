const path = require('path');
const webpack = require('webpack');

const configuration = {
    entry: './src/01.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
    resolve: {
        /**
         * resolve.extensions 可以自定义默认扩展名，当import无扩展名的文件名时会从这里挨个查找
         */
        // extensions: ['.js'],
        extensions: ['.js', , '.txt'],
    },
};

const compiler = webpack(configuration);
compiler.run();




