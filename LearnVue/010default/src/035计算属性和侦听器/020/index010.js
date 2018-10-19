let app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue',
    },
    computed: {
        reversedMessage: {
            get: function () {
                // 在此例子中，改变message的值，reversedMessage也会改变
                return this.message.split('').reverse().join('');
            },
            // 计算属性也可以指定setter
            set: function (value) {
                this.message = value.split('').reverse().join('');
            }
        },
    },
});


