Vue.component('component-one', {
    template: `<div>
                    <!--与组件和prop不同，事件名称不会做任何转化（不会转化成kebab-case）-->
                    <!--并且如果在DOM模版中使用事件，事件名必须全小写，因为在html是大小写不敏感的-->
                    <!--推荐使用kebab-case的事件名-->
                    <div @click="$emit('event-one')">this is component one</div>
                </div>`,
});


let app = new Vue({
    el: '#app',
    data: {},
    methods: {
        handleEvent: function ($event) {
            console.log('event handled', $event);
        }
    }
});



