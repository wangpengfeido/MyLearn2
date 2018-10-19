// 可自定义选项合并策略
// "Vue.config.optionMergeStrategies.选项名" 定义一个合并逻辑函数
Vue.config.optionMergeStrategies.data = function (toVal, fromVal, vm) {
    // 例如，用混入对象的data直接替换原组件的data
    if (fromVal) {
        return fromVal;
    } else {
        return toVal;
    }
}

let myMixinTwo = {
    data: function () {
        return {
            value: 1,
        };
    },
    methods: {
        handleAddValue: function () {
            this.value++;
        },
    }
}

Vue.component('component-two', {
    template: `<div>
                    <div>this is component two</div>
                    <div>value:{{value}}</div>
                    <div>
                        <button @click="handleAddValue()">add value</button>
                    </div>
                </div>`,
    mixins: [myMixinTwo],
    data: function () {
        return {
            value: 100,
        };
    },
});


let app = new Vue({
    el: '#app',
});



