/**
 * Created by dell on 2017/8/27.
 */
const componentOne = {
    template: '<div>this is component one\
        <div>id:{{$route.params.id}}</div>\
    </div>',
    watch: {
        '$route'(to, from) {
            console.log('route is changed', to, from, this.$route)
        }
    }
};

const componentTwo = {
    template: '<div>this is component two\
        <div>id:{{$route.params.id}}</div>\
        <div>name:{{$route.params.name}}</div>\
    </div>'
}

const componentTwo1 = {
    template: '<div>this is component two1\
    </div>'
}

const componentThree = {
    template: '<div>this is component three\
    <div>id:{{$route.params.id}}</div>\
    </div>'
}

const routes = [
    {path: '/one/:id', component: componentOne},
    {path: '/two/:id/post/:name', component: componentTwo},
    {path: '/two/1/post/a', component: componentTwo1},
    {path: '/three/:id?', component: componentThree},
]
const router = new VueRouter({
    routes
})


const app = new Vue({
    router
}).$mount('#app')


