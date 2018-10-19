// 简写：如果只想在bind和update钩子中触发相同行为，可以采用函数简写
Vue.directive('show-hook', function (el, binding, vnode, oldVnode) {
    console.log('..........el', el);
    console.log('..........binding', binding);
    console.log('..........vnode', vnode);
    console.log('..........oldVnode', oldVnode);
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



