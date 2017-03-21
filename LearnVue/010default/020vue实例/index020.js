/**
 * Created by dell on 2017/3/19.
 */
let outData={message:'abc'};
//尝试修改outData的值

let vm=new Vue({
    el:'#app',
    data:outData
});

console.log('vm.message==outData.message?',vm.message==outData.message);
console.log('vm.$data===outData',vm.$data===outData);
console.log('vm.$el===document.getElementById("app")?',vm.$el===document.getElementById('app'));

vm.$watch('message',function (newValue, oldValue) {
    console.log('message changed');
});