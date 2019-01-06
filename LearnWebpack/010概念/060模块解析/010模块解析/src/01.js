// webpack 使用 enhanced-resolve 来解析文件路径

// webpack中有三种解析方式：

// 相对路径
// import './02';

// 绝对路径
// import 'D:\\workspace\\github\\MyLearn2\\LearnWebpack\\010概念\\060模块解析\\010模块解析\\src\\02.js'

// 模块路径。模块路径由resolve.modules指定
// 当指向一个文件：
//     有扩展名，直接打包
//     无扩展名，通过resolve.extensions决定扩展名
// 当指向一个文件夹
//     文件夹中有package.json，按resolve.mainFields中配置的字段名来读取package.json中对应字段的路径
//     文件夹中没有package.json，或者package.json的对应字段没有有效路径，则查找resolve.mainFiles配置选项中指定的文件名
//     扩展名按照指向文件时的情况

console.log('this is 01');




