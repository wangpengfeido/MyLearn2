import React, {Component} from 'react';

function One() {
    // 可以用{}包裹js表达式作为属性值
    // if 语句和 for 循环在 JavaScript 中不是表达式，因此它们不能直接在 JSX 中使用，但是你可以将它们放在周围的代码中。
    return (
        <div title={1 + 2 + 3}>(1)</div>
    )
}

function Two() {
    // 可传递字符串常量给属性
    // 当传递字符串常量时，可包含html转移字符，会被转义
    return (
        <div>
            (2)
            <div title="&lt;3">a</div>
            <div title={"<3"}>b</div>
            <div title={"&lt;3"}>c</div>
        </div>
    );
}

function Three() {
    // 不给属性传值默认为true

    // 不建议使用类似disabled={true}，因为会与ES6对象简洁表示法混淆(disabled={true:true})
    return (
        <div>
            (3)
            <div><input disabled/></div>
            <div><input disabled={true}/></div>
        </div>
    );
}

function Four() {

    function ComponentOne(props) {
        return (
            <div>
                <div>{props.a}</div>
                <div>{props.b}</div>
            </div>
        )
    }

    const temp = {a: 'aaa', b: 'bbb'};

    // 可以用扩展操作符"..."传递一个对象（可以是props对象）来一次传递多个属性
    // 这对扩展属性非常有用，但会传递不相关属性，使得代码混乱。所以要谨慎使用
    return (
        <div>
            (4)
            <ComponentOne {...temp}/>
        </div>
    )
}

export class AiaAba extends Component {
    render() {
        return (
            <div>
                <h3>属性</h3>
                <One/>
                <br/><br/><br/>
                <Two/>
                <br/><br/><br/>
                <Three/>
                <br/><br/><br/>
                <Four/>
            </div>
        );
    }
}
