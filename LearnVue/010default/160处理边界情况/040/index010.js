// $parent 在多层级嵌套时容易失去控制(见../020/)，这时应该使用依赖注入

Vue.component('component-parent', {
    template: `<div>
                    this is component parent
                    <div>{{value}}</div>
                    <slot></slot>
                </div>`,
    data: function () {
        return {
            value: 0,
        };
    },
    // 使用provide指定提供给子代的数据和方法
    provide: function () {
        return {
            parentValue: this.value,
            getParentValue: () => this.value,
            addParentValue: () => {
                this.value++;
            }
        }
    }
});

Vue.component('component-child', {
    template: `<div>
                    <div>this is component child</div>
                    <div>
                        <button @click="handleAddParentValue()">add parent value</button>
                        <button @click="handleAlertParentValue()">alert parent value</button>
                    </div>
                </div>`,
    // 使用inject接收父代提供的属性
    inject: ['parentValue', 'getParentValue', 'addParentValue'],
    methods: {
        handleAddParentValue: function () {
            this.addParentValue();
        },
        handleAlertParentValue: function () {
            // 因为非响应式，this.parentValue始终是0，getParentValue()的返回值才是当前的值
            alert(`${this.parentValue},${this.getParentValue()}`);
        }
    },
});

// 依赖注入好处：1.不暴露整个实例而是只暴露指定的数据和方法；2.接口是明确定义的
// 可以把依赖注入看做大范围有效的props，除了：1.祖先组件不需要知道哪些后代组件使用它提供的属性；2.后代组件不需要知道被注入的属性来自哪里

// 依赖注入弊端：
// 1.组件耦合度上升
// 2.它是非响应式的

let app = new Vue({
    el: '#app',
    data: {
        value: 1,
    },
});



