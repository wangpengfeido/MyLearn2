'use strict';

/**
 * Created by dell on 2017/3/19.
 */
Vue.component('show-life-hook', {
    template: '<div>展示生命周期钩子{{message}}</div>',
    props: ['message'],
    beforeCreate: function beforeCreate() {
        console.log('beforeCreate');
    },
    created: function created() {
        console.log('created');
    },
    beforeMount: function beforeMount() {
        console.log('beforeMount');
    },
    mounted: function mounted() {
        console.log('mounted');
    },
    beforeUpdate: function beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated: function updated() {
        console.log('updated');
    },
    activated: function activated() {
        console.log('activated');
    },
    deactivated: function deactivated() {
        console.log('deactivated');
    },
    beforeDestroy: function beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed: function destroyed() {
        console.log('destroyed');
    }
});

var vm = new Vue({
    el: '#app',
    data: {
        message: 'this is message',
        seen: true
    },
    methods: {
        changeSeen: function changeSeen() {
            this.seen = !this.seen;
        }
    }
});
//# sourceMappingURL=index030.js.map