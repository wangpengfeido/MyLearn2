// 插件通常会为 Vue 添加全局功能。插件的范围没有限制——一般有下面几种：
// 1.添加全局方法或者属性，如: vue-custom-element
// 2.添加全局资源：指令/过滤器/过渡等，如 vue-touch
// 3.通过全局 mixin 方法添加一些组件选项，如: vue-router
// 4.添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
// 5.一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如 vue-router

// 开发插件
let MyPlugin = Object();
// 插件应该有一个公开的install方法，方法第一个参数是Vue构造器，第二个参数是一个可选的选项对象
MyPlugin.install = function (Vue, options) {
    // 添加全局方法或属性
    Vue.add = function (a, b) {
        return a + b;
    };

    // 添加全局资源
    Vue.directive('my-directive', {
        bind() {
            console.log('my directive bound', options);
        }
    });

    // 全局mixin
    Vue.mixin({
        created: function () {
            console.log('mixin created', options);
        }
    });

    // 添加Vue实例方法
    Vue.prototype.$add = function (a, b) {
        return a + b;
    }
}


// 使用插件 Vue.use()。第一个参数是插件，第二个参数是选项对象
// Vue会阻止重复注册插件。
//
Vue.use(MyPlugin, {someOption: true});
// 在某些插件中，如果检测到Vue是可访问的全局变量，会自动调用Vue.use()

Vue.component('component-one', {
    template: `<div v-my-directive>
                    this is component one.
                </div>`,
});


let app = new Vue({
    el: '#app',
});



