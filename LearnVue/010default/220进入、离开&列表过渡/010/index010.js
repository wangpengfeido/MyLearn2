/**
 * Vue提供一下几种过渡效果：
 * 在 CSS 过渡和动画中自动应用 class
 * 可以配合使用第三方 CSS 动画库，如 Animate.css
 * 在过渡钩子函数中使用 JavaScript 直接操作 DOM
 * 可以配合使用第三方 JavaScript 动画库，如 Velocity.js
 */


Vue.component('component-one', {
    // 使用 transition 组件。当插入/删除transition组件中的元素时：
    // 自动嗅探目标元素是否应用了 CSS 过渡或动画，如果是，在恰当的时机添加/删除 CSS 类名。
    // 如果过渡组件提供了 JavaScript 钩子函数，这些钩子函数将在恰当的时机被调用。
    // 如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作 (插入/删除) 在下一帧中立即执行。(注意：此指浏览器逐帧动画机制，和 Vue 的 nextTick 概念不同)
    template: `<div>
                    <button @click="show=!show">toggle</button>
                    <transition name="fade">
                        <div v-if="show">this is component one</div>
                    </transition>
                </div>`,
    data: function () {
        return {
            show: true,
        };
    },
});


let app = new Vue({
    el: '#app',
    data: {},
});



