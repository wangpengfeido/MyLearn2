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
    }
});
//# sourceMappingURL=index010.js.map