Vue.component('component-one', {
    template: `<div>
                    this is component one
                    <div>{{$root.value}}</div>
                    <button @click="handleConsoleRoot()">console root</button>
                    <button @click="$root.value++">add root.value</button>
                </div>`,
    methods: {
        handleConsoleRoot: function () {
            // 可以通过$root访问Vue根实例
            console.log(this.$root);
            // 在DEMO或小型应用中可以将根实例作为全局store，读写数据、访问计算属性、调用方法等
            // 但是尽量不要这么做，请使用Vuex
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        value: 1,
    },
});



