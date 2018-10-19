let app = new Vue({
    el: '#app',
    data: {
        count: 0,
    },
    methods: {
        addCount: function (n = 1) {
            this.count += n;
        },
    }
});

Vue.config.keyCodes.f1 = 112;



