/**
 * 可以使用'v-bind'来绑定'class'和'style'字符串，但这样麻烦且易错
 * 所以对'v-bind'做了对应的增强
 */

let app = new Vue({
    el: '#app',
    data: {
        styles: {
            color: 'red',
            backgroundColor: 'gray',
            fontSize: '20px',
        }
    },
    computed: {
        computedStyles: function () {
            let styles = {...this.styles};
            styles.fontSize = `${parseInt(styles.fontSize) + 5}px`;
            return styles;
        }
    }
});



