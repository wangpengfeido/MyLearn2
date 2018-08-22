// 使用内联的方式指定loader
// loader之间用 ! 分开
// loader后面可以用 ? 指定options。options可以是json形式，也可以是类似key=value&key2=value2的形式。
// 缺点是增加代码量且不容易定位问题
import 'style-loader!css-loader?{modules:true}!./01.css';

console.log('this is 01');
