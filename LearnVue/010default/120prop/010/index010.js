Vue.component('component-one', {
    template: `<div>
                    <div>this is component one</div>
                    <div>{{propOne}}</div>
                </div>`,
    // 声明prop时需要使用camelCase
    // 在DOM中直接使用时需要用kebab-case，见./index010.html
    // 在字符串模板和单文件组件中不仅可使用kebab-case，还可以使用cameCase
    props: ['propOne']
});

Vue.component('component-two', {
    template: `<component-one propOne="hello two"></component-one>`
});


let app = new Vue({
    el: '#app',
    data: {},
});



