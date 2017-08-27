'use strict';

/**
 * Created by dell on 2017/8/26.
 */

var vm = new Vue({
    el: '#app',
    data: {
        childData: {
            a: 'aaa' }
    },
    methods: {
        addB: function addB() {
            this.childData.b = 'bbb'; //添加非响应式属性
        },
        changeB: function changeB() {
            this.childData.b += 'b';
        },
        addC: function addC() {
            //注意：不允许动态添加根级响应式属性，即不允许调用类似this.$set(this,'c','ccc')
            //注意：当动态设置响应式属性时，vue将触发一次其祖先属性及祖先属性的子属性的检查
            this.$set(this.childData, 'c', 'ccc'); //添加响应式属性
        },
        changeC: function changeC() {
            this.$set(this.childData, 'c', 'cccc');
        },
        addD: function addD() {
            //这样也可以添加响应式属性，这在一次添加许多属性时很有用
            this.childData = Object.assign({}, this.childData, { d: 'ddd' });
        },
        changeD: function changeD() {
            this.childData.d += 'd';
        },
        changeA: function changeA() {
            this.childData.a += 'a';
            console.log('before:', this.$el.querySelector('.a').textContent);
            this.$nextTick(function () {
                //在DOM更新后调用
                console.log('after:', this.$el.querySelector('.a').textContent);
            });
        }
    }
});
//# sourceMappingURL=index010.js.map