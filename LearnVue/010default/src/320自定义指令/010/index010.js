// 使用Vue.directive全局注册指令
Vue.directive('outer-register-focus', {
    inserted: function (el) {
        el.focus();
    }
});

Vue.component('component-one', {
    template: `<div>
                    this is component one
                    <!--使用指令时，需要在前面加'v-'前缀-->
                    <input v-outer-register-focus>
                    <input v-inner-register-focus>
                </div>`,
    // 使用directives选项局部注册指令
    directives: {
        'inner-register-focus': {
            inserted: function (el) {
                el.focus();
            }
        }
    }
});


let app = new Vue({
    el: '#app',
});



