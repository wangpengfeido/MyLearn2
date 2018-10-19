Vue.component('blog-post-event', {
    template: `<div>
                    <h3>{{post.title}}</h3>
                    <p v-html="post.content"></p>
                    <div>
                        <!--使用$emit向父组件发送事件，第一个参数为事件名，第二个参数为抛出的值-->
                        <button v-on:click="$emit('enlarge-text',0.1)">enlarge text</button>
                    </div>
                </div>`,
    props: ['post'],
});

Vue.component('custom-input', {
    template: `<div>
                    <span>{{value}}</span>
                    <button @click="handleAdd()">append a</button>
                </div>`,
    // 在组件上，v-model="value" 相当于 :value="value" @input="value=$event"
    // 所以，如果要在组件上自定义v-mode，就定义一个名为value的prop，再定义一个名为input的事件传出值
    props: ['value'],
    methods: {
        handleAdd: function () {
            this.$emit('input', this.value + 'a');
        },
    }
});

let app = new Vue({
    el: '#app',
    data: {
        postFontSize: 1,
        blogList: [
            {id: 1, title: 'blog a', content: 'content a'},
            {id: 2, title: 'blog b', content: 'content b'},
            {id: 3, title: 'blog c', content: 'content c'},
        ],
        valueOne: 'aaa',
    },
    methods: {
        handleEnlargeText: function ($event) {
            this.postFontSize += $event;
        },
    },
});



