// 自定义组件的v-model时，默认使用组件的"value prop"和"input事件"(见071基础组件)
Vue.component('component-one', {
    // 使用model选项来自定义v-model使用的prop和事件
    model: {
        prop: 'modelProp',
        event: 'model-event'
    },
    template: `<div>
                    <button @click="handleClick()">{{count}}</button>
                </div>`,
    // 注意：需要在props中声明model指定的prop
    props:['modelProp'],
    data: function () {
        return {
            count: this.modelProp,
        };
    },
    methods: {
        handleClick: function () {
            this.count++;
            this.$emit('model-event', this.count);
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        count: 0,
    },
    methods: {
        handleEvent: function ($event) {
            console.log('event handled', $event);
        }
    }
});



