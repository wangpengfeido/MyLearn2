Vue.directive('show-hook', {
    // 指令有以下生命周期钩子
    bind: function () {
        // 只调用一次，指令第一次绑定到元素时调用
        console.log('...bind');
    },
    inserted: function () {
        // 被绑定元素插入父节点时调用(不一定已被插入文档中)
        console.log('........inserted');
    },
    update: function () {
        // 所在组件的 VNode 更新时调用
        // 但是可能发生在其子 VNode 更新之前（指令的值可能改变，也可能没有）
        console.log('..........update');
    },
    componentUpdated: function () {
        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
        console.log('.............componentUpdated')
    },
    unbind: function () {
        // 只调用一次，指令与元素解绑时调用。
        console.log('.............unbind');
    }
});

Vue.component('component-one', {
    template: `<div>
                    this is component one {{value}}
                    <input v-show-hook="value">
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



