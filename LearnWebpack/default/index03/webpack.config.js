/**
 * Created by dell on 2017/3/5.
 */
var webpack=require('webpack');
var config={
    entry:'./entry.js',
    output:{
        path:'./',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'}
        ]
    }
};

module.exports=config;