const path = require('path');
const webpack = require('webpack');

const configuration = {
    entry: './src/01.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './010dist')
    },
    mode: 'development',
};

const compiler = webpack(configuration);
compiler.run();

