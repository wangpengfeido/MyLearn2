Vue.component('one', {
    template: `<div>this is component one.</div>`,
});

Vue.component('two', {
    template: `<div>this is component two.</div>`,
});


let app = new Vue({
    el: '#app',
    data: {
        currentComponent: 'one',
    },
});

// 更多关于 动态组件 的知识，查看 动态组件 一节


// 解析 DOM 模板时的注意事项：
// 有些 HTML 元素，对于哪些元素可以出现在其内部，或者出现在哪些元素内部，是有严格限制的。例如 ul 和 li
// 这时候就可以用 is 特性，将 is 用在这些元素上，来符合html的规定
// 但是，如果从这些来源使用模版，这些限制是不存在的：1.字符串(template:``)；2.单文件组件(.vue)；3.<script type="text/x-template">

