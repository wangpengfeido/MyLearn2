let app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue',
        reversedMessage: 'hello vue'.split('').reverse().join(''),
    },
    computed: {},
    watch: {
        message: function () {
            this.debouncedGetReversedMessage();
        },
    },
    methods: {
        // 当需要执行异步操作或开销较大时，可以使用侦听器的方式
        // 它可以进行计算属性做不到的：异步操作、限制频率、设置中间状态
        getReversedMessage: function () {
            setTimeout(() => {
                this.reversedMessage = this.message.split('').reverse().join('');
            },1000);
        },
    },
    created: function () {
        this.debouncedGetReversedMessage = _.debounce(this.getReversedMessage,2000);
    }
});


