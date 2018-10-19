Vue.component('blog-post', {
    template: `<h3>{{title}}</h3>`,
    // 使用props来定义可接受属性列表，通过属性父组件向子组件传递数据
    props: ['title'],
    data: function () {
        return {};
    },
});

Vue.component('blog-post-v2', {
    // 组件必须只有一个根元素
    template: `<div>
                    <h3>{{post.title}}</h3>
                    <p v-html="post.content"></p>
                </div>`,
    // 可以将多个prop组合在一个对象中
    props: ['post'],
})

let app = new Vue({
    el: '#app',
    data: {
        blogList: [
            {id: 1, title: 'blog a', content: 'content a'},
            {id: 2, title: 'blog b', content: 'content b'},
            {id: 3, title: 'blog c', content: 'content c'},
        ]
    },
});



