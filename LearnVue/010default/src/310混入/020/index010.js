// 全局混入
// 将影响到之后创建的所有Vue实例
// 应该谨慎使用这个特性
Vue.mixin({
    data: function () {
        return {
            value: 1,
        };
    },
    methods: {
        handleClick: function () {
            this.value++;
        }
    },
});


Vue.component('component-one', {
    template: `<div>
                    this is component one {{value}}
                    <button @click="handleClick()">click</button>
                </div>`,
});




let app = new Vue({
    el: '#app',
});



