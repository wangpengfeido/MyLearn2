// 动态加载了模块，产生了新的chunk
// publicPath决定了在动态加载这个chunk时的加载路径
import('./content01').then(res=>{
    res.default();
});

console.log('this is index');
