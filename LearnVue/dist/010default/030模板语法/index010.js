'use strict';

/**
 * Created by dell on 2017/3/19.
 */
var vm = new Vue({
    el: '#app',
    data: {
        message: 'this is message',
        html: '<a href="https://www.baidu.com">百度</a>',
        title: 'this is title',
        seen: true
    },
    methods: {
        doSth: function doSth() {
            console.log('doSth');
        }
    },
    filters: {
        filterOne: function filterOne(value) {
            return value + ' used filterOne';
        },
        filterTwo: function filterTwo(value, addedStr) {
            return value + ' used filterTwo and added ' + addedStr;
        }
    }
});
//# sourceMappingURL=index010.js.map