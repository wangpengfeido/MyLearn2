// 单向数据流
// 父组件prop更新下流到子组件，反过来则不行
// 因此不应该在子组件内部改变prop，否则Vue将给出警告

Vue.component('component-one', {
    template: `<div>
                    <div>this is component one</div>
                    <div>{{propOne}}</div>
                    <div>{{localOne}}</div>
                    <div>{{computedOne}}</div>
                </div>`,
    props: ['propOne'],
    data: function () {
        return {
            // 如果prop当作一个初始值，而接下来希望把其当作本地prop使用
            // 那么应该定义一个本地data
            localOne: this.propOne,
        }
    },
    computed: {
        // 如果要将prop进行转换
        // 那么应该定义一个计算属性
        computedOne: function () {
            return this.propOne.toUpperCase()
        },
    },
});

// 注意：对象和数组是引用传入的，改变对象或数组会影响到父组件的变量

let app = new Vue({
    el: '#app',
    data: {},
});



