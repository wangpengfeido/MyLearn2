Vue.component('component-one', {
    template: `<div>
                    this is component one
                    <button @click="$emit('test','aaa')">test</button>
                </div>`,
    mounted: function () {
        // 与$emit配对的事件监听方法：
        // $on 监听一个事件
        // $once 一次性监听一个事件
        // $off 停止监听一个事件
        this.$on('test', function ($event) {
            alert($event);
        });
    }
});

class ThirdParty {
    // 一个假想的第三方插件
    destroy() {}
}

Vue.component('component-two', {
    template: `<div>
                    <div>this is component two</div>
                </div>`,
    ////////////////////////////////////////////////////////////////////////////
    // mounted: function () {
    //     this.thirdParty = new ThirdParty();
    // },
    // beforeDestroy: function () {
    //     // 使用组件生命周期钩子，在组件销毁前销毁第三方组件
    //     // 弊端：
    //     // 1.需要在实例中保存picker
    //     // 2.创建代码独立于清理代码，难于程序化地清理
    //     this.thirdParty.destroy();
    // }
    //////////////////////////////////////////////////////////////////////////////
    mounted: function () {
        let thirdParty = new ThirdParty();
        // 使用了一个程序化的侦听器，解决了上面的两个弊端
        this.$once('hook:beforeDestroy', function () {
            thirdParty.destroy();
        });
    }
});


let app = new Vue({
    el: '#app',
    data: {
        value: 1,
    },
});



