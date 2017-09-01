'use strict';

/**
 * Created by dell on 2017/8/27.
 */
var componentOne = {
    template: '<div>this is component one\
    <div>id:{{$route.params.id}}</div>\
    <router-view></router-view>\
    </div>',
    watch: {
        '$route': function $route(newValue, oldValue) {
            //$route watch值是路由信息对象
            console.log('route:', newValue, oldValue);
        }
    }
};
var componentOneOne = {
    template: '<div>this is component one one</div>'
};
var componentOneTwo = {
    template: '<div>this is component one two\
    <button @click="consoleRoute">打印路由信息对象</button>\
    </div>',
    methods: {
        consoleRoute: function consoleRoute() {
            //this.$route是路由信息对象
            console.log('route:', this.$route);
            //path
            //fullPath
            //params
            //query
            //hash
            //name
            //matched 匹配的路由及祖先路由
        }
    },
    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
        //路由钩子中的to、from是路由信息对象
        console.log('route:', to, from);
        next();
    }
    // scrollBehavior 方法的参数是路由信息对象,不做演示

};
var componentOneNull = {
    template: '<div>this is component one null</div>'
};
var componentTwo = {
    template: '<div>this is component two</div>'
};

var routes = [{
    path: '/one/:id',
    component: componentOne,
    children: [{
        path: '',
        component: componentOneNull
    }, {
        path: 'one',
        component: componentOneOne
    }, {
        path: 'onetwo',
        component: componentOneTwo
    }]
}, { path: '/two', component: componentTwo }];
var router = new VueRouter({
    routes: routes
});

console.log(router);

var app = new Vue({
    router: router,
    methods: {
        consoleMatchRoute: function consoleMatchRoute() {
            // router.match 方法的返回值是路由信息对象
            // console.log('route:', router.match("/one/1/onetwo"));
        }

    }
}).$mount('#app');
//# sourceMappingURL=index010.js.map