/**
 * Created by dell on 2017/8/27.
 */
const componentOne = {
    template: '<div>this is component one\
    <div>id:{{$route.params.id}}</div>\
    <router-view></router-view>\
    </div>',
    watch: {
        '$route': function (newValue, oldValue) {
            //$route watch值是路由信息对象
            console.log('route:', newValue, oldValue)
        }
    }
};
const componentOneOne = {
    template: '<div>this is component one one</div>'
};
const componentOneTwo = {
    template: '<div>this is component one two\
    <button @click="consoleRoute">打印路由信息对象</button>\
    </div>',
    methods: {
        consoleRoute: function () {
            //this.$route是路由信息对象
            console.log('route:', this.$route)
            //path
            //fullPath
            //params
            //query
            //hash
            //name
            //matched 匹配的路由及祖先路由
        }
    },
    beforeRouteEnter(to, from, next) {
        //路由钩子中的to、from是路由信息对象
        console.log('route:', to, from);
        next();
    }
    // scrollBehavior 方法的参数是路由信息对象,不做演示
};
const componentOneNull = {
    template: '<div>this is component one null</div>'
};
const componentTwo = {
    template: '<div>this is component two</div>'
};

const routes = [
    {
        path: '/one/:id',
        component: componentOne,
        children: [
            {
                path: '',
                component: componentOneNull
            },
            {
                path: 'one',
                component: componentOneOne
            },
            {
                path: 'onetwo',
                component: componentOneTwo
            },
        ]
    },

    {path: '/two', component: componentTwo},
];
const router = new VueRouter({
    routes
});

console.log(router);

const app = new Vue({
    router,
    methods: {
        consoleMatchRoute: function () {
            // router.match 方法的返回值是路由信息对象
            // console.log('route:', router.match("/one/1/onetwo"));
        }

    }
}).$mount('#app');


