class MyClass {
    constructor(a) {
        this.a = a;
    }
}

Vue.component('component-one', {
    template: `<div>
                    <div>this is component one</div>
                    <div>stringProp:{{stringProp}}</div>
                    <div>numberProp:{{numberProp}}</div>
                    <div>booleanProp:{{booleanProp}}</div>
                    <div>arrayProp:{{arrayProp}}</div>
                    <div>objectProp:{{objectProp}}</div>
                    <div>myClassProp:{{myClassProp}}</div>
                </div>`,
    // prop可以指定类型:String/Number/Boolean/Array/Object/自定义类
    props: {
        stringProp: String,
        numberProp: Number,
        booleanProp: Boolean,
        arrayProp: Array,
        objectProp: Object,
        myClassProp: MyClass,
    }
});


let app = new Vue({
    el: '#app',
    data: {
        post: {
            stringProp: 'hello',
            numberProp: 11,
            booleanProp: true,
            arrayProp: [1, 2, 3],
            objectProp: {hello: 'world'},
            myClassProp: new MyClass('aaa'),
        }
    },
});



