Vue.component('component-one', {
    // 组件可以递归调用自身
    // 必须要有递归结束调节，否则将导致无限递归
    template: `<div>
                    this is level {{level}}
                    <component-one
                        v-if="levelData<=3"
                        :level="levelData+1"></component-one>
                </div>`,
    props: ['level'],
    data: function () {
        return {
            levelData: this.level || 1,
        }
    }
});


let app = new Vue({
    el: '#app',
    data: {
        value: 1,
    },
});



