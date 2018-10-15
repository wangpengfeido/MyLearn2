Vue.component('component-one', {
    template: `<div>
                    <div>this is component one</div>
                    <slot></slot>
                </div>`,
    data: function () {
        return {
            value: 100,
        }
    }
});

Vue.component('component-two', {
    // 将数据绑定到slot元素上，将其传入slot-scope特性中
    template: `<div>
                    <slot :userName="userName" :userPhone="userPhone"></slot>
                </div>`,
    data: function () {
        return {
            userName: '张三',
            userPhone: '123456',
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        value: 1,
    },
});



