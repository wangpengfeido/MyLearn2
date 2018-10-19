// 创建一个Vue实例
// 所有的 Vue 组件都是 Vue 实例，并且接受选项对象
let vm = new Vue({
    // 我的：el选项，实际上是以el指定的dom内容作为template
    el: '#app',
    data: {
        message: '这里是app1'
    }
});

// 组件构造器
// 所有的 Vue.js 组件其实都是被扩展的 Vue 实例
let MyComponent = Vue.extend({
    template: '<div>{{message}}</div>',
    data: function () {
        return {
            message: '这里是组件构造器的实例'
        };
    }
});
let myComponentInstance = new MyComponent();
myComponentInstance.$mount('#my-component-instance');


