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
});

Vue.component('component-child', {
    template: `<div>
                    <div>this is component child</div>
                    <div>
                        <button @click="handleAddParentValue()">{{$parent.value}}</button>
                    </div>
                </div>`,
    methods: {
        handleAddParentValue: function () {
            // 使用$parent访问父组件实例
            // 它可以替代使用prop将数据传递到子组件
            this.$parent.value++;
        }
    },
});

// 这在共享组件库实例是有用的，例如：
// <base-map><map-markers></map-markers></base-map>

// 但是，当内部有多层级出现就会容易出现问题，例如
// <base-map><map-region><map-markers></map-markers></map-region></base-map>
// 这时如果要拿到map实例，就需要使用hack：var map=this.$parent.map || this.$parent.$parent.map
// 很快它就会失控，这时就应该用依赖注入替代它（见../040/）

let app = new Vue({
    el: '#app',
    data: {
        value: 1,
    },
});



