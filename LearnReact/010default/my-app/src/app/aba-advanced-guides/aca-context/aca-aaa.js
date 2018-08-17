import React, {Component} from 'react';

// 使用React.createContext(defaultValue)创建一对{Provider,Consumer}
// 当渲染Consumer时，它将从组件树的上层中最接近的匹配的Provider读取当前的context值。
// 参数是默认值，当没有匹配的Provider时将使用默认值。注意：把值赋undefined不会触发默认值
const Context = React.createContext('one');

class OneChild extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*Consumer接收函数作为子节点，函数返回React节点，value的值是最近的Provider提供的值*/}
                {/*value变化时Consumer重新渲染。注意使用对象作为value值的情况*/}
                <Context.Consumer>
                    {contextValue => <div>{contextValue}</div>}
                </Context.Consumer>
            </div>
        );
    }
}

class OneParent extends Component {
    render() {
        return (
            <div>
                {/*接收value传递给Consumer*/}
                <Context.Provider value="two">
                    <OneChild/>
                </Context.Provider>
            </div>
        );
    }
}

export class AcaAaa extends Component {
    render() {
        return (
            <div>
                <h3>用法</h3>
                <OneParent/>
            </div>
        );
    }
}



