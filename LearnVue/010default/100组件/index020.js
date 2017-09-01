/**
 * Created by w1036_000 on 2017/8/23.
 */

Vue.component('component-one', {
    props: ['messageOne'],
    template: '<p>this is component one. message:{{messageOne}}</p>',
});

//单向数据流，不能直接修改参数的值
Vue.component('component-two', {
    props: ['message'],
    data: function () {
        return {
            initedMessage: this.message          //彻底断绝外界联系
        };
    },
    computed: {
        computedMessage: function () {              //参数改变仍会改变，可以设置setter
            return this.message + '........';
        }
    },
    template: '<div>\
        <p>this is component two.</p>\
        <p>message:{{message}}.</p>\
        <p>initedMessage:{{initedMessage}}.</p>\
        <p>computedMessage:{{computedMessage}}.</p>\
        <input type="text" v-model="message">\
        <input type="text" v-model="initedMessage">\
        <input type="text" v-model="computedMessage">\
    </div>'
});


let vm = new Vue({
    el: '#app',
    data: {
        test: 'hello world'
    }
});

