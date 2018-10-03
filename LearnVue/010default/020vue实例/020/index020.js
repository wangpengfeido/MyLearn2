let outData = {message: 'abc'};
// 尝试修改outData的值

// 注意：如果data被冻结，那么将追踪变化
// Object.freeze(outData);

// 当一个 Vue 实例被创建时，它向 Vue 的响应式系统中加入了其 data 对象中能找到的所有的属性。
// data中的数据改变时，视图会进行重渲染。
let vm = new Vue({
    el: '#app',
    data: outData
});

// Vue实例暴露了一些以$开头的实例方法
console.log('vm.message===outData.message?', vm.message === outData.message); // true
console.log('vm.$data===outData', vm.$data === outData); // true
console.log('vm.$el===document.getElementById("app")?', vm.$el === document.getElementById('app')); // true

// $watch监听data变化
vm.$watch('message', function (newValue, oldValue) {
    console.log('message changed');
});