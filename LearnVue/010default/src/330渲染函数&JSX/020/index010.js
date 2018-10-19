Vue.component('component-one', {
    props: {
        level: {type: Number, required: true},
    },
    render: function (createElement) {
        return createElement(
            // {String | Object | Function}
            // 必需参数。一个 HTML 标签字符串，组件选项对象，或者解析上述任何一种的一个 async 异步函数。
            `h${this.level}`,
            // {Object}
            // 可选参数。一个包含模板相关属性的数据对象。你可以在 template 中使用这些特性。
            {
                // 注意：class与style属性与其他属性不同，它们相当于v-bind:class与v-bind:style上的绑定
                // 接收一个字符串、对象或字符串和对象组成的数组
                'class': {foo: true, bar: false},
                'style': {color: 'red'},
                // 普通的 HTML attrs
                attrs: {id: 'foo',},
                // 组件props。
                props: {},
                // HTML DOM props
                domProps: {lang: 'en-us',},
                // 事件监听器基于 `on`
                // 不再支持修饰符，需要手动进行
                on: {
                    click: this.handleClick,
                },
                // 仅用于组件，用于监听原生事件。而不是组件内部使用`vm.$emit` 触发的事件。
                nativeOn: {},
                // 自定义指令。注意：你无法对 `binding` 中的 `oldValue`赋值，因为 Vue 已经自动为你进行了同步。
                directives: [],
                // 作用域插槽。格式：{ name: props => VNode | Array<VNode> }
                scopedSlots: {},
                // slot特性，当它是其他组件的子组件时
                slot: '',
                // 其他特殊顶层属性
                key: '',
                ref: '',
                // 如果你在渲染函数中向多个元素都应用了相同的 ref 名，那么 `$refs.myRef` 会变成一个数组。
                refInFor: true,
            },
            // {String | Array}
            // 可选参数。子虚拟节点 (VNodes)，由 `createElement()` 构建而成，也可以使用字符串来生成“文本虚拟节点”。
            [
                'this is component one',
                createElement('div', 'hello world'),
            ],
        );
    },
    methods: {
        handleClick: function () {
            console.log('............click')
        }
    }
});

Vue.component('component-two', {
    render: function (createElement) {
        // 注意：组件树中的VNode必须是唯一的，所以下面的写法是不正确的
        // let myVNode = createElement('p', 'hello');
        // return [myVNode, myVNode];

        // 如果想要重复多次元素/组件，可以使用工厂函数
        return createElement(
            'div',
            Array.apply(null, {length: 20})
                .map(() => createElement('p', 'hello')),
        );
    },
})

let app = new Vue({
    el: '#app',
});

// TODO:更多关于渲染函数

