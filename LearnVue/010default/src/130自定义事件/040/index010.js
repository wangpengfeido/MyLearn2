Vue.component('component-one', {
    template: `<div>
                    <button @click="handleClick()">{{count}}</button>
                    <button @click="handleTwoClick()">{{countTwo}}</button>    
                </div>`,
    props: ['count', 'countTwo'],
    methods: {
        handleClick: function () {
            // update:xxxProp 事件，表示对xxxProp赋值的意图
            this.$emit('update:count', this.count + 1);
        },
        handleTwoClick: function () {
            this.$emit('update:countTwo', this.countTwo + 1);
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        post: {
            count: 0,
            countTwo: 100,
        }
    },
    methods: {
        handleEvent: function ($event) {
            console.log('event handled', $event);
        }
    }
});



