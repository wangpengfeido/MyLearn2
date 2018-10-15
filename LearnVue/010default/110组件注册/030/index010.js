import Vue from 'vue';

// 在使用模块系统时，可以导入使用的组件并注册
import ComponentOne from './component-one';

// 如果有一些基础组件会在各个组件中频繁使用，可以将其自动全局注册
import './auto-register';

let app = new Vue({
    el: '#app',
    components: {
        ComponentOne,
    },
    data: {},
});



