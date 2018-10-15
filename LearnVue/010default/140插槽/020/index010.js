Vue.component('component-one', {
    // 使用多个插槽时，可以使用name为插槽命名
    // 不使用name的插槽为默认插槽，未匹配的内容被插入到其中
    template: `<div>
                    <div>this is component one</div>
                    <slot name="slotOne"></slot>
                    <slot name="slotTwo"></slot>
                    <slot></slot>
                </div>`,
});

Vue.component('component-two', {
    // 在slot标签内部可以指定默认内容
    // 当父组件未提供内容时，会显示默认内容；否则默认内容会被替换掉
    template: `<div>
                    <div>this is component two</div>
                    <slot>this is default content in slot</slot>
                </div>`
});


let app = new Vue({
    el: '#app',
    data: {},
});



