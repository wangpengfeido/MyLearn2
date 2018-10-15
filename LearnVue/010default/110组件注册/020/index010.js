const ComponentOne = {
    template: `<div>this is component one</div>`,
};

const ComponentTwo = {
    template: `<div>
                    this is component two
                    <!--不能在这里使用ComponentOne-->
                    <!--<component-one></component-one>-->
                </div>`,
};

const ComponentThree = {
    components: {
        ComponentOne,
    },
    // 组件要使用其他局部注册的组件，要先在自身的components中注册
    template: `<div>component three:<component-one></component-one></div>`,
}

let app = new Vue({
    el: '#app',
    // 在components选项里局部注册组件
    // 注意：局部注册的组件在其子组件中不可用。例如，在ComponentTwo中不能使用ComponentOne。
    components: {
        ComponentOne,
        ComponentTwo,
        ComponentThree,
    },
    data: {},
});



