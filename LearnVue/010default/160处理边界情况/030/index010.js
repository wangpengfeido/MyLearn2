Vue.component('component-child', {
    template: `<div>
                    <div>this is component child</div>
                    <div>
                        <input ref="userInput">
                    </div>
                </div>`,
    methods: {
        focus: function () {
            this.$refs.userInput.focus();
        }
    }
});

Vue.component('component-parent', {
    template: `<div>
                    this is component parent
                    <!--使用ref特性为组件指定一个引用id-->
                    <component-child ref="componentChild"></component-child>
                    <div>
                        <button @click="focusInput()">focus input</button>
                    </div>
                </div>`,
    methods: {
        focusInput: function () {
            // 使用$ref访问子组件实例
            this.$refs.componentChild.focus();
        }
    }
});

// 当 ref 与 v-for 一起使用时，得到的是一个子组件数组

// 注意：$refs只会在渲染后生效，并且不是响应式的
// 所以应该避免直接在模版中或在计算属性中使用 $refs

let app = new Vue({
    el: '#app',
    data: {
        value: 1,
    },
});



