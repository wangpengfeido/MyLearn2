let app = new Vue({
    el: '#app',
    data: {
        list1: {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
        },
    },
    methods: {
        addItem: function () {
            // Vue不能检测对象属性的添加或删除
            // this.list1.d = 'ddd';    // 不行

            // Vue不能向已创建的实例添加根级别的响应式属性，但是可以添加嵌套级别的属性
            // 使用Vue.set方法或vm.$set方法
            this.$set(this.list1, 'd', 'ddd');
        },
        addMultiItem: function () {
            // 不能使用类似Object.assign()方法向原有对象添加多个新属性
            // Object.assign(this.list1, {e: 'eee', f: 'fff'});    // 不行

            // 应该创建一个新对象替换原有对象
            this.list1 = Object.assign({}, this.list1, {e: 'eee', f: 'fff'})
        }
    }
});



