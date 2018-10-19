Vue.component('component-one', {
    // slot 是承载分发内容的出口
    // 分发内容是模版代码，可以包括html或其他组件
    // 注意：如果组件内为包含slot元素，那么传入的内容将会丢弃
    template: `<div>
                    <div>this is component one</div>
                    <slot></slot>
                </div>`,
});


let app = new Vue({
    el: '#app',
    data: {},
});



