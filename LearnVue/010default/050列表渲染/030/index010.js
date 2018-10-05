let app = new Vue({
    el: '#app',
    data: {
        list1: [
            {value: 3},
            {value: 5},
            {value: 1},
            {value: 4},
            {value: 2},
        ],
    },
    methods: {
        mutation: function () {
            // 数组的变异方法会触发视图更新
            // 如，push/pop/shift/unshift/splice/sort/reverse等
            this.list1.push({value: Math.random()});
        },
        replace: function () {
            // 非变异方法可以采用替换原数组的方式
            // 如filter/concat/slice等
            // 这不会导致重新渲染整个列表，而是重用部分元素
            this.list1 = this.list1.filter(item => item.value >= 1);
        },
        changeItem: function () {
            // Vue不能检测数组某一项的变动
            // this.list1[0] = 100;    // 不行

            // 可以使用splice方法代替
            // this.list1.splice(0, 1, {value: 100});

            // 可以使用Vue.set方法或vm.$set方法
            // Vue.set(this.list1, 0, {value: 100});
            this.$set(this.list1, 0, {value: 100});
        },
        changeLength: function () {
            // Vue也不能检测长度的变化
            // this.list1.length = 2;    // 不行

            // 可以使用splice方法
            this.list1.splice(2)
        }
    }
});



