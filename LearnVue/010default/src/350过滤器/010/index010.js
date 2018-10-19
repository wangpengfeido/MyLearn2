// 定义全局过滤器
Vue.filter('filterOuter', function (value, addValue = 1) {
    return value + addValue;
});

Vue.component('component-one', {
    // 定义局部过滤器
    filters: {
        filterInner: function (value, addValue = 100) {
            return value + addValue;
        }
    },
    template: `<div>
                    this is component one.
                    <!--过滤器可使用在双花括号插值和v-bind表达式中。使用"|"管道符号-->
                    <div :title="value|filterInner">{{value|filterOuter}}</div>
                    <!--过滤器可以串联-->
                    <div>{{value|filterOuter|filterInner}}</div>
                    <!--过滤器可以接收参数-->
                    <div>{{value|filterOuter(20)|filterInner(200)}}</div>
                </div>`,
    data: function () {
        return {
            value: 1,
        };
    },
});


let app = new Vue({
    el: '#app',
});



