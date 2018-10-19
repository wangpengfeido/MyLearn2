/**
 * 可以使用'v-bind'来绑定'class'和'style'字符串，但这样麻烦且易错
 * 所以对'v-bind'做了对应的增强
 */

Vue.component('one',{
    template:'<div>{{content}}</div>',
    props:['content'],
});

let app = new Vue({
    el: '#app',
    data: {
        classes: {
            'colorRed': true,
            'backgroundGray': false,
            'fontWeightBolder': false,
        },
        // colorRed: 'colorRed',
        // backgroundGray: 'backgroundGray',
        // fontWeightBolder: 'fontWeightBolder'

    },
    computed: {
        computedClasses: function () {
            let classes = {...this.classes};
            classes.backgroundGray = !classes.backgroundGray;
            return classes;
        }
    }
});



