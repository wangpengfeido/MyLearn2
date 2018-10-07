// 组件是可复用的 Vue 实例，且带有一个名字
// 因为组件 Vue 实例，所以它们与 'new Vue' 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。
Vue.component('button-counter', {
    template: `<button @click="count++">{{count}}</button>`,
    data: function () {
        // 组件的data必须是一个函数，这样每个组件实例才能有独立的data拷贝
        // 否则各个实例的data将会相互影响
        return {
            count: 0,
        }
    },
    // 这样是不允许的
    // data: {
    //     count: 0,
    // },
});

// 通常一个应用会以一棵嵌套的组件树的形式来组织、

// 组件在使用前必须先注册，分为全局注册和局部注册
// 上面的注册方式（Vue.component）即为全局注册，全局注册的组件可以被在其之后创建的所有Vue实例使用
// 更多关于组件注册的组件注册查看 组件注册 一节

let app = new Vue({
    el: '#app',
    data: {},
});



