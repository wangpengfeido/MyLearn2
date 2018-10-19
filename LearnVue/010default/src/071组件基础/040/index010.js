Vue.component('slot-box', {
    // 使用<slot>实现插槽，将子元素插入到对应位置
    template: `<div><slot></slot></div>`,
});

// 更多关于 插槽 的知识，查看 插槽 一节

let app = new Vue({
    el: '#app',
    data: {
    },
});



