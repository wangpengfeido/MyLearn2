let vm = new Vue({
    el: '#app',
    data: {
        message: 'this is message',
        html: '<a href="https://www.baidu.com">百度</a>',
        title: 'this is title',
        seen: true
    },
    methods: {
        doSth: function () {
            console.log('doSth');
        }
    },
    filters: {
        filterOne: function (value) {
            return value + ' used filterOne';
        },
        filterTwo: function (value, addedStr) {
            return value + ' used filterTwo and added ' + addedStr;
        }
    }
});


