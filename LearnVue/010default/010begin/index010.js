/**
 * Created by dell on 2017/3/19.
 */
//组件
Vue.component('component-one',{
    props:['data'],
    template:'<div><div v-for="item in data">{{item.text}}</div></div>'
});

let app=new Vue({
    el:'#app',
    data:{
        message:'hello vue',
        date:new Date(),
        seen:true,
        list:[
            {text:'列表项1'},
            {text:'列表项2'},
            {text:'列表项3'}
        ]
    },
    methods:{
        changeMessage:function () {
            this.message+='MessageChanged';
        }
    }
});


