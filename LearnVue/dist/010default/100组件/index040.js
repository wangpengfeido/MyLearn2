'use strict';

/**
 * Created by w1036_000 on 2017/8/23.
 */

Vue.component('component-one', {
    template: '<div><p @click="clickFn">this is component one.</p></div>',
    methods: {
        clickFn: function clickFn() {
            //触发事件
            console.log('event one one emitted');
            this.$emit('eventoneone'); //事件名最好都用小写，否则在html模板中将无法监听事件
        }
    },
    created: function created() {
        //可以使用本对象.$on监听
        this.$on('eventoneone', function () {
            console.log('handled event one one in lifecycle.');
        });
    }
});

Vue.component('component-two', {
    props: ['message'],
    data: function data() {
        return {
            initedMessage: this.message
        };
    },
    template: '<div><p>this is component two.</p><input type="text" v-model="initedMessage" @change="messageChange"></div>',
    methods: {
        messageChange: function messageChange() {
            console.log('.........................', this.initedMessage);
            this.$emit('update:message', this.initedMessage);
        }
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        a: {
            test: 'hello world'
        }
    },
    methods: {
        handleEventOneOne: function handleEventOneOne() {
            console.log('handled event one one.');
        },
        handleNativeEvent: function handleNativeEvent() {
            console.log('handled native event.');
        }
    }
});
//# sourceMappingURL=index040.js.map