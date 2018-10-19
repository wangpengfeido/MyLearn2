Vue.component('component-one', {
    template: `<label><input></label>`,
});

Vue.component('component-two', {
    inheritAttrs: false,
    template: `<label>
                    <input
                        v-bind="$attrs"
                        :value="value"
                        v-on="inputListeners">
                </label>`,
    props: ['value'],
    computed: {
        // $listeners 是所有事件监听器
        // 使用$listeners，可以手动触发某事件或将某事件绑定到任意元素上
        // 我的理解：就是可以手动调用事件的监听器，而不使用$emit()触发
        inputListeners: function () {
            return Object.assign({},
                // 本组件绑定的所有监听器
                this.$listeners,
                // 自定义本组件内使用的其他监听器
                {
                    // 这个是为了确保v-model能正确工作
                    input: event => {
                        this.$event('input', event.target.value);
                    }
                });
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        value: 'aaa',
    },
    methods: {
        handleEvent: function ($event) {
            console.log('event handled', $event);
        }
    }
});



