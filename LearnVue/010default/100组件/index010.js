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
    data: function () {
        return {
            x: 1
        }
    },
    template: '<p>this is component four.x:{{x}}</p>'
});
let data = {x: 1};
Vue.component('component-five', {
    data: function () {
        return data;          //注意：此时所有该组件共享一个data
    },
    template: '<p @click="dataAdd">this is component four.x:{{x}}</p>',
    methods: {
        dataAdd: function () {
            this.x++;
        }
    }
});

let vm = new Vue({
    el: '#app',
    //局部注册组件
    components: {
        'component-two': {
            template: '<p>this is component two</p>'
        }
    }
});








