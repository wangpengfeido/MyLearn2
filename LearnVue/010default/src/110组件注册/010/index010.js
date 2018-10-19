// Vue.component的第一个参数是组件名
// 组件名可以使用kebab-case(建议)或PascalCase
// 无论哪种组件名，直接在DOM中使用时都是kebab-case；PascalCase组件名在模版字符串和单文件组件中可以使用PascalCase

Vue.component('component-one', {
    template: `<div>this is component one</div>`,
});

Vue.component('ComponentTwo', {
    template: `<div>this is component two</div>`,
});

Vue.component('component-three', {
    // 在模版字符串中使用PascalCase的字符串时，可接受PascalCase
    template: `<div>component three:<ComponentTwo></ComponentTwo></div>`,
});

// 上面使用Vue.component 注册的组件是全局注册的。就是说它们可以在注册后创建的所有Vue实例(包括根实例)中使用

let app = new Vue({
    el: '#app',
    data: {},
});



