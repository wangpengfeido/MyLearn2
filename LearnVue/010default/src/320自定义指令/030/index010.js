Vue.directive('show-hook', {
    // 指令钩子有以下参数
    update: function (el, binding, vnode, oldVnode) {
        // 所绑定的元素
        console.log('..........el', el);
        // binding.name 指令名
        // binding.value 绑定计算出的值
        // binding.oldValue 前一个值
        // binding.expression 绑定的指令表达式(未计算形式)
        // binding.arg 指令参数（':'后面）
        // binding.modifiers 一个key为修饰符的对象（'.'后面）
        console.log('..........binding', binding);
        // Vue 编译生成的虚拟节点
        console.log('..........vnode', vnode);
        // 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
        console.log('..........oldVnode', oldVnode);
    },
    // 注意：除el外其他参数都是只读的。
    // 如果要在钩子之间共享数据，可以使用HTMLElement.dataset
});

Vue.component('component-one', {
    template: `<div>
                    this is component one {{value}}
                    <input v-show-hook:value.a.b="value">
                    <button @click="handleAdd()">add</button>
                </div>`,
    data: function () {
        return {
            value: 1,
        };
    },
    methods: {
        handleAdd: function () {
            this.value++;
        }
    }
});


let app = new Vue({
    el: '#app',
});



