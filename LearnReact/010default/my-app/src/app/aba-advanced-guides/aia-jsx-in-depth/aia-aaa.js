import React, {Component} from 'react';

function One() {
    // 本质上来讲，JSX 只是为 React.createElement(component, props, ...children) 方法提供的语法糖

    // 等价语法
    const oneOne = <div className="one">oneOne</div>;
    const oneTwo = React.createElement('div', {className: 'one'}, 'oneTwo');
    // 等价语法：如果没有子代，相当于自闭合标签
    const twoOne = <div className="two"/>;
    const twoTwo = React.createElement('div', {className: 'two'});
    return (
        <div>
            (1)
            {oneOne}
            {oneTwo}
            {twoOne}
            {twoTwo}
        </div>
    );
}

function Two() {
    // JSX 的标签名决定了 React 元素的类型。

    // React和组件变量必须被声明，即使没有在JSX中直接地调用它们
    return (
        <div>
            (2)
        </div>
    );
}

function Three() {
    const Components = {
        One: function () {return <div>components.one</div>;},
        Two: function () {return <div>components.two</div>;}
    };
    // 可以使用点表示法引用组件。
    // 这样可以方便地一次导入多个组件。
    return (
        <div>
            (3)
            <Components.One/>
            <Components.Two/>
        </div>
    )
}

function Four() {
    // 用户定义组件必须首字母大写
    // 如果定义了小写开头的组件，要将其赋值给大写开头的变量
    // 注意：在使用点语法时不需要遵守此规则
    const myComponent = function () {return <div>my component</div>;};
    const MyComponent = myComponent;
    return (
        <div>
            (4)
            <MyComponent/>
        </div>
    )
}

function Five() {
    // 元素类型不能是表达式
    // 可以将组件赋给大写开头的变量实现条件渲染
    const Components = {
        One: function () {return <div>components.one</div>;},
        Two: function () {return <div>components.two</div>;}
    };
    let ShowComponent;
    if (true) {
        ShowComponent = Components.One;
    }
    return (
        <div>
            (5)
            <ShowComponent/>
        </div>
    )
}

export class AiaAaa extends Component {
    render() {
        return (
            <div>
                <One/>
                <br/><br/><br/>
                <Two/>
                <br/><br/><br/>
                <Three/>
                <br/><br/><br/>
                <Four/>
                <br/><br/><br/>
                <Five/>
            </div>
        );
    }
}

