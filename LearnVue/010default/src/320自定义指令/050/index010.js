Vue.directive('show-hook', function (el, binding, vnode, oldVnode) {
    console.log('..........binding.value', binding.value);
});

Vue.component('component-one', {
    template: `<div>
                    this is component one {{value}}
                    <!--如果指令需要多个值，可以传入一个对象字面量-->
                    <input v-show-hook:value.a.b="{value:value,valueTwo:valueTwo}">
                    <button @click="handleAdd()">add</button>
                </div>`,
    data: function () {
        return {
            value: 1,
            valueTwo: 2,
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



