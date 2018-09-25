import React, {Component} from 'react';

class WrappedOne extends Component {
    render() {
        return (<div>
            <div>id:{this.props.data.id}</div>
            <div>name:{this.props.data.name}</div>
        </div>);
    }
}

/**
 * 使用React.forwardRef传递ref
 */

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
            // 把props.forwardedRef作为ref
            const {forwardedRef, ...rest} = this.props;
            return (<WrappedComponent ref={forwardedRef} {...rest}/>);
        }
    }

    function forwardRef(props, ref) {
        // 第二个参数是ref，它由React.forwardRef提供
        // 将它作为一个普通prop传递给组件
        return (<LogProps {...props} forwardedRef={ref}/>)
    }

    // 这两行是可选的，设置displayName，用来改变，高阶组件返回的组件在开发者工具中的名称显示
    // 如果不设置，那么在开发工具中显式的组件名就是ForwardRef(xxx)
    const name = WrappedComponent.displayName || WrappedComponent.name;
    forwardRef.displayName = `logProps(${name})`;

    // React.forwardRef接受一个函数，函数有两个参数props和ref，函数返回一个React node
    return React.forwardRef(forwardRef);
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
        return (<div>
            <EnhancedComponent ref={this.myRef} data={{id: 1, name: '张三'}}/>
            <button onClick={this.consoleRef}>console ref</button>
        </div>)
    }
}

export class AeaAba extends Component {
    render() {
        return (
            <div>
                <One/>
            </div>
        )
    }
}



