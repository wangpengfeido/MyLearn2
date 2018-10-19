Vue.component('component-one', {
    data: function () {
        return {
            value: 100,
        }
    }
});

Vue.component('component-two', {
    // 使用x-template模版
    template: '#component-two',
    data: function () {
        return {
            value: 200,
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {},
});



