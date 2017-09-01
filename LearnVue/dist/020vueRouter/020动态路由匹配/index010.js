'use strict';

/**
 * Created by dell on 2017/8/27.
 */
var componentOne = {
    template: '<div>this is component one\
        <div>id:{{$route.params.id}}</div>\
    </div>',
    watch: {
        '$route': function $route(to, from) {
            console.log('route is changed', to, from, this.$route);
        }
    }
};

var componentTwo = {
    template: '<div>this is component two\
        <div>id:{{$route.params.id}}</div>\
        <div>name:{{$route.params.name}}</div>\
    </div>'
};

var componentTwo1 = {
    template: '<div>this is component two1\
    </div>'
};

var componentThree = {
    template: '<div>this is component three\
    <div>id:{{$route.params.id}}</div>\
    </div>'
};

var routes = [{ path: '/one/:id', component: componentOne }, { path: '/two/:id/post/:name', component: componentTwo }, { path: '/two/1/post/a', component: componentTwo1 }, { path: '/three/:id?', component: componentThree }];
var router = new VueRouter({
    routes: routes
});

var app = new Vue({
    router: router
}).$mount('#app');
//# sourceMappingURL=index010.js.map