class MyClass {
    constructor(a) {
        this.a = a;
    }
}

Vue.component('component-one', {
    template: `<div>
                    <div>this is component one</div>
                    <div>{{propOne}}</div>
                    <div>{{propTwo}}</div>
                    <div>{{propThree}}</div>
                </div>`,
    props: {
        // 可以为prop指定验证要求，当传入的prop不符合要求时，Vue将给出警告
        propOne: {
            // 类型检查：可以是String/Number/Boolean/Array/Object/Date/Function/Symbol等原生类，也可以是自定义类
            type: MyClass,
        },
        // 基础类型检查，相当于{type:xxx}，值是null时可匹配任何类型
        propTwo: MyClass,
        // 指定多个可能的类型
        propThree: [MyClass, String],
    },
});

Vue.component('component-two', {
    template: `<div>
                    <div>this is component two</div>
                    <div>{{propOne}}</div>
                    <div>{{propTwo}}</div>
                    <div>{{propThree}}</div>
                    <div>{{propFour}}</div>
                </div>`,
    props: {
        propOne: {
            type: Number,
            // 指定默认值
            default: 100,
        },
        propTwo: {
            type: MyClass,
            // 当prop类型是对象或数组时，默认值必须从一个工厂函数获取
            default: function () {
                return new MyClass('default');
            },
        },
        propThree: {
            type: Number,
            // 指定必须prop
            required: true,
        },
        propFour: {
            // 自定义验证函数
            validator: function (value) {
                // 注意：prop会在实例创建之前验证
                // 所以实例的属性(data/computed/methods等)在default和validator函数中是不可用的
                return value && value.length && value.length > 3;
            }
        }
    },
})


let app = new Vue({
    el: '#app',
    data: {
        post: {
            myClass: new MyClass('aaa'),
        }
    },
});



