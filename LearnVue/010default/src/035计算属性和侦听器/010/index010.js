let app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue',
        watch_reversedMessage: 'hello vue'.split('').reverse().join(''),
    },
    computed: {
        // 声明计算属性
        // 它实际上是reversedMessage的getter属性
        // 它应该是一个纯函数
        reversedMessage: function () {
            // 在此例子中，改变message的值，reversedMessage也会改变
            return this.message.split('').reverse().join('');
        },
    },
    methods: {
        // 方法与计算属性的区别是：计算属性是基于依赖的，只有依赖更新时才会执行；而方法在每次渲染时都会执行
        // 如果不需要基于依赖的缓存，就使用方法
        method_reversedMessage: function () {
            return this.message.split('').reverse().join('');
        },
    },
    watch: {
        // vue提供了watch方式来侦听数据变动
        // 这样使代码变得命令式和重复，最好不要这样用
        message: function () {
            this.watch_reversedMessage = this.message.split('').reverse().join('');
        },
    },
});


