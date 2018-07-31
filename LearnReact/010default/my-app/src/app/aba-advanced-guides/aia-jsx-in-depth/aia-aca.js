import React, {Component} from 'react';

function FatherComp(props) {
    console.log(props.children);
    return (
        <div>
            {props.children}
        </div>
    );
}

// 在包含开始和结束标签的 JSX 表达式中，标记之间的内容作为特殊的参数传递：props.children

function One() {
    // 字符串常量可作为子代
    // JSX 会移除空行和开始与结尾处的空格。标签邻近的新行也会被移除，字符串常量内部的换行会被压缩成一个空格
    return (
        <div>
            (1)
            <FatherComp>
                hello
                world ！
            </FatherComp>
        </div>
    )
}

function Two() {
    // 可以嵌入多个JSX元素。
    // 可以混合不同类型子元素。
    // 可以通过数组插入多个元素

    return (
        <div>
            (2)
            <FatherComp>
                <span>hello</span>
                <div>world</div>
            </FatherComp>
        </div>
    )
}

function Three() {
    // react组件可以用数组形式返回多个元素
    return [
        <div key='1'>1</div>,
        <div key='2'>2</div>
    ];
}

function Four() {
    // 可以将任何 {} 包裹的 JavaScript 表达式作为子代传递
    // 可以利用它渲染列表
    // 可以与其他类型子代混合使用
    const list = [1, 2];
    return (
        <div>
            <FatherComp>
                (4)
                <div>hello {'world'}</div>
                {list.map((item, index) => <div key={index}>{item}</div>)}
            </FatherComp>
        </div>
    )
}

function Five() {
    // 子代可以是任何元素，只要该组件在 React 渲染前将其转换成 React 能够理解的东西。
    return (
        <div>
            (5)
            <FatherComp>
                {[<div key='1'>1</div>, <div key='2'>2</div>]}
                {(() => <div>function</div>)()}
            </FatherComp>
        </div>
    );
}

function Six() {
    // false、null、undefined 和 true 都是有效的子代，但它们会被忽略，不会直接被渲染
    return (
        <div>
            (6)
            <div>
                {/*表现一致*/}
                <span/>
                <span></span>
                <span>{true}</span>
                <span>{false}</span>
                <span>{undefined}</span>
                <span>{true}</span>
            </div>
            <div>
                {/*可以根据这个特性来条件渲染*/}
                <span>{true && 'hello'}</span>
                <span>{false && 'hello'}</span>
            </div>
            <div>
                {/*falsy值仍然会被渲染*/}
                <span>{0}</span>
                <span>{0 && 'hello'}</span>
                {/*所以表达式要确保是布尔值*/}
                <span>{0 > 0}</span>
                <span>{0 > 0 && 'hello'}</span>
            </div>
            <div>
                {/*如果要输出上面的值，应该转换为字符串*/}
                <span>{String(false)}</span>
            </div>
        </div>
    )
}

export class AiaAca extends Component {
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
                <br/><br/><br/>
                <Six/>
            </div>
        );
    }
}
