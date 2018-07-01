import React, {Component} from 'react';

export class AbaIntroducingJsx extends Component {
    render() {
        // jsx是js的语法扩展，它可以声明react元素
        const elementOne = <div>this is element one</div>;

        /////////////////////
        // react认为渲染逻辑和其他ui逻辑是天然耦合的
        // react使用低耦合的“模块”来组织应用，模块中包含页面标记文件和页面逻辑
        // jsx能帮助在js中与ui协同工作

        ///////////////////////////////
        // 在jsx中可以使用表达式
        const v = 1;
        const elementTwo = <div>{v},{3 * 4},{(() => 1)()}</div>;

        /////////////
        // jsx也是表达式。它最终会编译成js对象。所以它可以和对象一样使用，比如在for、if、return语句中
        const f = () => (<div>this is jsx return by function</div>);

        /////////////////////////////////////////////////////
        // 使用引号指定字符串属性。使用花括号指定变量属性
        const idOfElementThree = 'element-three';
        const elementThree = (<div id={idOfElementThree} title="element three">this is element three</div>)
        // 注意，jsx中使用驼峰命名来指定属性。例如class->className，tabindex->tabIndex

        /////////////////////////////////////////
        // jsx定义孩子
        // 像html一样，jsx使用/>闭合元素。jsx也可以包含子元素。

        /////////////////////////////////////////
        // 防注入
        // jsx在插入值之前会转换成字符串
        let xss = '<script>alert(\'this is xss\')</script>';
        const elementFour = (
            <div>
                this is element four.
                {xss}
            </div>
        );

        ///////////////////////////////////////
        // jsx生成的是对象，它调用了React.createElement()方法
        const elementFiveOne = (
            <div title='element five one'>
                <span>this is element five one</span>
                <span>23333</span>
            </div>
        );
        const elementFiveTwo = React.createElement(
            'div',
            {title: 'element five two'},
            React.createElement(
                'span', {}, 'this is element five two'
            ),
            React.createElement(
                'span', {}, '23333'
            )
        );
        // 上面这两种写法，都是创建了类似这样一个react元素对象：（还有更多属性后面说，可以在开发插件中看到）
        // {type:'div',props:{title:'',children:[{}]}}
        console.log(elementFiveOne, elementFiveTwo);

        return (
            <div>
                <div>{elementOne}</div>
                <div>{elementTwo}</div>
                <div>{f()}</div>
                <div>{elementThree}</div>
                <div>{elementFour}</div>
                <div>{elementFiveOne}</div>
                <div>{elementFiveTwo}</div>
            </div>
        )
    }
}