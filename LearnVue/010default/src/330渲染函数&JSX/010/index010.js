// 有时我们需要动态生成组件，而不得不写像下面这样冗长的内容
// 这时我们就可以使用动态渲染函数 render
Vue.component('component-one', {
    template: `<div>
                    <h1 v-if="level===1"><slot></slot></h1>
                    <h2 v-if="level===2"><slot></slot></h2>
                    <h3 v-if="level===3"><slot></slot></h3>
                    <h4 v-if="level===4"><slot></slot></h4>
                    <h5 v-if="level===5"><slot></slot></h5>
                    <h6 v-if="level===6"><slot></slot></h6>
                </div>`,
    props: {
        level: {type: Number, required: true},
    }
});

Vue.component('component-two', {
    props: {
        level: {type: Number, required: true},
    },
    // 使用render函数，动态渲染组件
    render: function (createElement) {
        return createElement(
            `h${this.level}`,      // 标签名称
            this.$slots.default,   // 子元素数组
        );
        // createElement 实际上创建了一个VNode（Virtual Node 虚拟节点），它描述了Vue应该如何渲染真实节点
        // 整个VNode树称为“虚拟DOM”

        // html节点组成一棵树，你不需要关心DOM节点树如何高效更新，只需要告诉Vue你希望页面上html是什么
    }
});

let app = new Vue({
    el: '#app',
});



