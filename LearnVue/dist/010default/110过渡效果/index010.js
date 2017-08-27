'use strict';

/**
 * Created by dell on 2017/8/27.
 */

var vm = new Vue({
    el: '#app',
    data: {
        aIsShow: true,
        bIsShow: true,
        cIsShow: true,
        dIsShow: true
    },
    methods: {
        toggleA: function toggleA() {
            this.aIsShow = !this.aIsShow;
            this.$nextTick(function () {
                //在动画开始播放时就会执行
                //但是dom真正移除的时间取决于动画的时长
                console.log('dom changed');
            });
        },
        toggleB: function toggleB() {
            this.bIsShow = !this.bIsShow;
        },
        toggleC: function toggleC() {
            this.cIsShow = !this.cIsShow;
        },
        cLeaved: function cLeaved() {
            console.log('c leaved');
        },
        toggleD: function toggleD() {
            this.dIsShow = !this.dIsShow;
        },
        dLeave: function dLeave(el, done) {
            var marginLeft = 0;
            var interval = window.setInterval(function () {
                marginLeft += 10;
                el.style.marginLeft = marginLeft + 'px';
                if (marginLeft >= 300) {
                    clearInterval(interval);
                    done(); //调用done完成动画
                }
            }, 100);
        },
        dBeforeEnter: function dBeforeEnter(el) {
            console.log('...........before enter');
            el.style.marginLeft = '300px';
        },
        dEnter: function dEnter(el, done) {
            //没有用
            // console.log('...........enter');
            // el.style.transition = 'all 3s';
            // el.style.marginLeft = '0px';
            // window.setTimeout(function () {
            //     console.log('...............done');
            //     done();
            // },3000);

            var marginLeft = 300;
            var interval = window.setInterval(function () {
                marginLeft -= 10;
                el.style.marginLeft = marginLeft + 'px';
                if (marginLeft <= 0) {
                    clearInterval(interval);
                    done(); //调用done完成动画
                }
            }, 100);
        }
    }
});
//# sourceMappingURL=index010.js.map