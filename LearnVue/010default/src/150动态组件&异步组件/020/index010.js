// 当需要动态加载组件时，可以用一个类似Promise的工厂函数加载组件
Vue.component('component-one', function (resolve, reject) {
    // 模拟加载
    setTimeout(function () {
        resolve({
            template: `<div>this is component one</div>`,
        });
    }, 2000);
});

// 异步组件工厂函数也可以是如下格式的对象
Vue.component('component-three', function () {
    return {
        // 需要加载的组件。注意：它是一个Promise
        component: new Promise(function (resolve, reject) {
            // 需要加载的组件
            setTimeout(function () {
                resolve({
                    template: `<div>this is component three</div>`,
                });
            }, 3000);
        }),
        // // 加载时显示的组件
        // loading: {template: 'loading component'},
        // // 加载失败显示的组件
        // error: {template: 'error component'},
        // // 显示加载时组件的延迟时间
        // delay: 1000,
        // // 加载超时时间，超过该时间认为加载失败。默认值"Infinity"
        // timeout: 3000,
    };
});

// TODO:使用webpack

let app = new Vue({
    components: {
        // 组件内注册也可以异步加载
        'component-two': function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    template: `<div>this is component two</div>`,
                });
            }, 2000);
        }
    },
    el: '#app',
    data: {},
});



