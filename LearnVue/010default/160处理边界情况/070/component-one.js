// 如果使用模块系统局部注册组件
// 在循环相互引用时会导致异常，因为AB相互依赖无法不经过一个组件解析出另一个组件
// 为解决此问题设置一个点，在那里A反正，但不需要先解析B

export default {
    template: `<div>
                    <div>this is component one （level {{levelData}}）</div>
                    <component-two
                        v-if="levelData<6"
                        :level="levelData+1"></component-two>
                </div>`,
    props: ['level'],
    data: function () {
        return {
            levelData: this.level || 0,
        }
    },
    ////////////////////////////////////////////////////
    // components: {
    //     ComponentTwo,
    // },
    //方式1：在生命周期beforeCreate时引入并注册另一个组件//////////////////////////////////////////////////////
    beforeCreate: function () {
        this.$options.components.ComponentTwo = require('./component-two').default;
    }
    //方式2：使用异步组件注册////////////////////////////////////////////////////
    // components: {
    //     ComponentTwo: () => import('./component-two'),
    // }
};


