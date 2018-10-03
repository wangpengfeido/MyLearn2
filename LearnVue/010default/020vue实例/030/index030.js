Vue.component('show-life-hook', {
    template: '<div>展示生命周期钩子{{message}}</div>',
    props: ['message'],
    beforeCreate: function () {
        console.log('beforeCreate');
    },
    created: function () {
        console.log('created');
    },
    beforeMount: function () {
        console.log('beforeMount');
    },
    mounted: function () {
        console.log('mounted');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate');
    },
    updated: function () {
        console.log('updated');
    },
    activated: function () {
        console.log('activated');
    },
    deactivated: function () {
        console.log('deactivated');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy');
    },
    destroyed: function () {
        console.log('destroyed');
    }
});

// 注意：不要在选项属性或回调上使用箭头函数。这将导致this指向异常

let vm = new Vue({
    el: '#app',
    data: {
        message: 'this is message',
        seen: true
    },
    methods: {
        changeSeen: function () {
            this.seen = !this.seen;
        }
    }
});



