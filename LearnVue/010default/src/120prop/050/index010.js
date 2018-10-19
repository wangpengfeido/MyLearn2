Vue.component('component-one', {
    template: `<div>
                    <div>this is component one</div>
                    <div>{{propOne}}</div>
                </div>`,
    props: {
        propOne: null,
    },
});

Vue.component('component-two', {
    template: `<div
                    class="class-inner"
                    style="color:green"
                    title="title inner">this is component two</div>`,
})

Vue.component('component-three', {
    // 如果希望不继承未声明的prop，那么设置inheritAttrs
    // 使用$attrs可以手动决定将哪个属性加到根元素上
    template: `<input type="number" :placeholder="$attrs.placeholder">`,
    inheritAttrs: false,
})


let app = new Vue({
    el: '#app',
    data: {
        post: {}
    },
});



