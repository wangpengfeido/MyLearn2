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

    // 如果高阶组件名字是A，包裹组件名字是B，通常用A(B)这样的显示名字
    LogProps.displayName = `LogProps(${getDisplayName(WrappedComponent)})`;
    // 注：displayName可改变组件在调试工具中显示的标签名
    return LogProps;
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const EnhancedComponent = logProps(WrappedOne);

export class AgaAea extends Component {
    render() {
        return (
            <div>
                <h3>约定：包装显示名字以便于调试</h3>
                <EnhancedComponent data={{id: 1, name: '张三'}} extraProp="this is extra prop"/>
            </div>
        );
    }
}

