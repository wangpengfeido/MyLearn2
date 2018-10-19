let app = new Vue({
    el: '#app',
    data: {
        count: 0,
    },
    methods: {
        addCount: function (n = 1) {
            this.count += n;
        },
        consoleEvent:function ($event) {
            console.log($event)
        }
    }
});



