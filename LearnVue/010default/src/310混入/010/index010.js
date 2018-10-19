// 混入是组件混入选项对象
// 它是灵活复用组件功能的方式

let myMixin = {
    data: function () {
        return {
            value: 1,
        };
    },
    methods: {
        handleClick: function () {
            this.value++;
        }
    },
}

Vue.component('component-one', {
    template: `<div>
                    this is component one {{value}}
                    <button @click="handleClick()">click</button>
                </div>`,
    // 使用mixins选项进行混入
    mixins: [myMixin],
});


// 当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。
let myMixinTwo = {
    // 数据对象将会进行浅合并
    // 当有冲突时以组件数据优先
    data: function () {
        return {
            value: 1,
            count: 2
        };
    },
    // 同名钩子将合并为数组,因此都将调用
    // 混入的钩子在组件自身钩子之前调用
    created: function () {
        console.log('created in mixin');
    },
    // methods/components/directives等值为对象的选项被混合为同一个对象
    // 当有冲突时以组件对象优先
    methods: {
        handleAddValue: function () {
            this.value++;
        },
        handleAddCount: function () {
            this.count++;
        }
    }
}

Vue.component('component-two', {
    template: `<div>
                    <div>this is component two</div>
                    <div>value:{{value}}</div>
                    <div>count:{{count}}</div>
                    <div>
                        <button @click="handleAddValue()">add value</button>
                        <button @click="handleAddCount()">add count</button>
                    </div>
                </div>`,
    mixins: [myMixinTwo],
    data: function () {
        return {
            value: 100,
        };
    },
    created: function () {
        console.log('created in component');
    },
    methods: {
        handleAddValue: function () {
            this.value += 10;
        }
    },
});


let app = new Vue({
    el: '#app',
});



