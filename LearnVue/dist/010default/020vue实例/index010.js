'use strict';

/**
 * Created by dell on 2017/3/19.
 */
var vm = new Vue({
    el: '#app',
    data: {
        message: '这里是app1'
    }
});

//组件构造器
//所有的 Vue.js 组件其实都是被扩展的 Vue 实例
var MyComponent = Vue.extend({
    template: '<div>{{message}}</div>',
    data: function data() {
        return {
            message: '这里是组件构造器的实例'
        };
    }
});
var myComponentInstance = new MyComponent();
myComponentInstance.$mount('#my-component-instance');
//# sourceMappingURL=index010.js.map