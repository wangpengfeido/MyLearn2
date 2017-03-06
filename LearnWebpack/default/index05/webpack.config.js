/**
 * Created by dell on 2017/3/5.
 */
var webpack=require('webpack');
var config={
    entry:'./entry.js',
    output:{
        // path:'/',               //**注意这里的配置**
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style-loader!css-loader'}
        ]
    },
    plugins:[
        new webpack.BannerPlugin('这里是banner插件添加的')
    ]
};

module.exports=config;