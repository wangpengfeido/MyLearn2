Vue.component('one', {
    props: ['data'],
    template: `<li>{{data}}</li>`
});

let app = new Vue({
    el: '#app',
    data: {
        list1: [
            {name: 'a', value: 1, show: true},
            {name: 'b', value: 2, show: false},
            {name: 'c', value: 3, show: true},
        ]
    },
});



