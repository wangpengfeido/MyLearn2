import React, {Component} from 'react';

/**
 * 转发refs是一种技术：将ref从组件传递到它的子代
 * 这种技术在某些类别的组件中，特别是可重用的组件库/高阶组件中十分有用
 */

/**
 * 我的理解：转发refs即改变ref“属性”的行为，使其不再赋它在的组件/DOM本身，而是赋用户指定的组件/DOM
 * 另外，ref是可以用普通props传递的
 */

class WrappedOne extends Component {
    render() {
        return (<div>
            <div>id:{this.props.data.id}</div>
            <div>name:{this.props.data.name}</div>
        </div>);
    }
}

function logProps(WrappedComponent) {
    class LogProps extends Component {
        constructor(props) {
            super(props);
        }

        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props', this.props);
        }

        render() {
            return (<WrappedComponent {...this.props}/>);
        }
    }

    return LogProps;
}

const EnhancedComponent = logProps(WrappedOne);

class One extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    consoleRef = () => {
        console.log(this.myRef.current);
    }

    render() {
        // 由于ref不是一个prop，所以refs不能传递
        // 现在ref指向的仍然是外层容器组件实例，而不是包裹组件实例
        // 见 "../aga-higher-order-components/aga-aha.js"
        return (<div>
            <EnhancedComponent ref={this.myRef} data={{id: 1, name: '张三'}}/>
            <button onClick={this.consoleRef}>console ref</button>
        </div>)
    }
}

export class AeaAaa extends Component {
    render() {
        return (
            <div>
                <One/>
            </div>
        )
    }
}



