/**
 * Created by dell on 2017/8/27.
 */
const componentOne = {
    template: '<div>this is component one</div>'
};
const componentTwo = {
    template: '<div>this is component two</div>'
};

const routes = [
    {path: '/one', component: componentOne},
    {path: '/two', component: componentTwo},
];
const router = new VueRouter({
    routes
});


const app = new Vue({
    router
}).$mount('#app');


