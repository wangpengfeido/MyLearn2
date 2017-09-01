'use strict';

/**
 * Created by w1036_000 on 2017/8/23.
 */

//必须在使用前注册
Vue.component('component-one', {
    template: '<p>this is component one</p>'
});

//限制包裹内容
Vue.component('component-three', {
    template: '<li>this is component three</li>'
});

//data必须是函数
Vue.component('component-four', {
    data: function data() {
        return {
            x: 1
        };
    },
    template: '<p>this is component four.x:{{x}}</p>'
});
var _data = { x: 1 };
Vue.component('component-five', {
    data: function data() {
        return _data; //注意：此时所有该组件共享一个data
    },
    template: '<p @click="dataAdd">this is component four.x:{{x}}</p>',
    methods: {
        dataAdd: function dataAdd() {
            this.x++;
        }
    }
});

var vm = new Vue({
    el: '#app',
    //局部注册组件
    components: {
        'component-two': {
            template: '<p>this is component two</p>'
        }
    }
});
//# sourceMappingURL=index010.js.map