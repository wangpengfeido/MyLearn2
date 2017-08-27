'use strict';

/**
 * Created by dell on 2017/8/27.
 */
var componentOne = {
    template: '<div>this is component one</div>'
};
var componentTwo = {
    template: '<div>this is component two</div>'
};

var routes = [{ path: '/one', component: componentOne }, { path: '/two', component: componentTwo }];
var router = new VueRouter({
    routes: routes
});

var app = new Vue({
    router: router
}).$mount('#app');
//# sourceMappingURL=index010.js.map