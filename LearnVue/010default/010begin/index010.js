// 组件本质上是拥有预选项的VUE实例
Vue.component('component-one', {
    props: ['data'],
    template: '<div><div v-for="item in data">{{item.text}}</div></div>'
});

let app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue',
        date: new Date(),
        seen: true,
        list: [
            {text: '列表项1'},
            {text: '列表项2'},
            {text: '列表项3'}
        ]
    },
    methods: {
        changeMessage: function () {
            this.message += 'MessageChanged';
        }
    }
});


