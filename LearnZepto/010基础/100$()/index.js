// 以原生dom元素为参数，会生成一个包含此元素的集合
console.log('以原生dom元素为参数：', $(document.querySelector('.test')));
// 以原生dom伪数组为参数，这样是不好的，它会生成一个只包含此伪数组的集合
console.log('以原生dom伪数组为参数：', $(document.querySelectorAll('.test')));

// context 相当于$(context).find(selector)
console.log('with context:', $('.test', '#with-context'));



