import React, {Component} from 'react';

// Context适用于多个不同层级多个组件需要访问相同数据
// 不要为了避免在几个层级传递props而使用context

// 如果要避免过多层级传递props，可以将一个组件拆分，并使用组合的方式传递子节点
// 但这样的缺点是使父组件过于复杂，使子组件过于灵活

function OneA() {
    const name = 'tom';
    const age = 23;
    const showName = <OneAAA name={name}/>;
    const showAge = <OneAAB age={age}/>;
    return <OneAA
        showName={showName}
        showAge={showAge}/>;
}

function OneAA(props) {
    return <div>
        {props.showName}
        {props.showAge}
    </div>;
}

function OneAAA(props) {
    return <div>{props.name}</div>
}

function OneAAB(props) {
    return <div>{props.age}</div>
}


export class AcaAba extends Component {
    render() {
        return (
            <div>
                <OneA></OneA>
            </div>
        );
    }
}
