'use strict';

/**
 * Created by dell on 2017/8/27.
 */
var componentOne = {
    template: '<div>this is component one\
    <div>id:{{$route.params.id}}</div>\
    <router-view></router-view>\
    </div>'
};
var componentOneOne = {
    template: '<div>this is component one one</div>'
};
var componentOneTwo = {
    template: '<div>this is component one two</div>'
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
    children: [
    //当没有路由匹配成功时，则匹配此路由
    {
        path: '',
        component: componentOneNull
    }, {
        path: 'one', //子路由名字尽量不要与父路由名字相同，虽然这样可行，但在某些情况下会有不可预料的表现
        component: componentOneOne
    }, {
        path: 'onetwo',
        component: componentOneTwo
    }]
}, { path: '/two', component: componentTwo }];
var router = new VueRouter({
    routes: routes
});

var app = new Vue({
    router: router,
    methods: {
        toOne: function toOne() {
            console.log(this);
        }
    }
}).$mount('#app');
//# sourceMappingURL=index010.js.map