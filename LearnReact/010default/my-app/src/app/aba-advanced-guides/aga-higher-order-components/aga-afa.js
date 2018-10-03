import React, {Component} from 'react';

function WrappedOne(props) {
    return (<div>
        <div>id:{props.data.id}</div>
        <div>name:{props.data.name}</div>
        <div>other:{props.other}</div>
    </div>);
}

function logProps(WrappedComponent) {
    class LogProps extends Component {
        constructor(props) {
            super(props);
            this.state = {
                other: '.......',
            };
        }

        componentWillReceiveProps(nextProps) {
            console.log('current props:', this.props);
            console.log('next props', nextProps);
        }

        render() {
            return (<WrappedComponent {...this.props}/>);
        }
    }

    return LogProps;
}

// 正确的做法：
// const EnhancedComponent = logProps(WrappedOne);

export class AgaAfa extends Component {
    render() {

        // 错误的做法：
        const EnhancedComponent = logProps(WrappedOne);

        // react 的协调算法，如果组件类型不同会丢掉旧子树渲染新子树，而如果再render中使用高阶组件，每次执行都会生成具有不同组件标识的组件，从而渲染新子树
        // 1.这样做会导致原组件的状态和子组件丢失
        // 2.会导致性能问题

        // 在很少的情况下，如果要动态调用高阶组件，可以在构造函数或生命周期钩子中调用

        return (
            <div>
                <h3>注意事项：不要在render函数中使用高阶组件</h3>
                <EnhancedComponent data={{id: 1, name: '张三'}} extraProp="this is extra prop"/>
            </div>
        );
    }
}



