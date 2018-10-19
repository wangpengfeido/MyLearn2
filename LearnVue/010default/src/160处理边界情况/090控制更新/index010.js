Vue.component('component-one', {
    template: `<div>
                    this is component one
                    <button @handleForceUpdate="">force update</button>
                </div>`,
    data: function () {
        return {
            value: 1,
        };
    },
    methods: {
        handleForceUpdate: function () {
            // 使用$forceUpdate可强制组件重新渲染
            // 如果你使用了它，大部分情况是你做错了事：可能没有留意到数组或对象的变更检测注意事项，或者可能依赖了一个未被 Vue 的响应式系统追踪的状态
            this.$forceUpdate();
        }
    }
});

Vue.component('component-two', {
    template: `<div>
                    this is component two.outer value:{{outerValue}}
                    <button @click="handleAddValue()">{{value}}</button>
                </div>`,
    props: ['outerValue'],
    data: function () {
        return {
            value: 1,
        };
    },
    methods: {
        handleAddValue: function () {
            this.value++;
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        value: 100,
    },
    methods: {
        handleAddValue: function () {
            this.value++;
        },
    },
});



