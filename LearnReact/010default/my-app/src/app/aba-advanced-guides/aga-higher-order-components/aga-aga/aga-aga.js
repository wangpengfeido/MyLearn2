import React, {Component} from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import {WrappedOne, staticFunc} from "./wrapped-one";

/**
 * 当使用高阶组件包装组件，原始组件被容器组件包裹，也就意味着新组件会丢失原始组件的所有静态方法。
 * 解决方法是，将原始组件的所有静态方法全部拷贝给新组件
 */

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

    // 方案一：手动拷贝。这样你必须知道包裹组件有哪些静态方法
    // LogProps.staticFunc = WrappedComponent.staticFunc;

    // 方案二：使用hoist-non-react-statics自动处理
    hoistNonReactStatics(LogProps, WrappedComponent);

    // 方案三：导出组件自身的静态方法
    // LogProps.staticFunc = staticFunc;

    return LogProps;
}

const EnhancedComponent = logProps(WrappedOne);

export class AgaAga extends Component {
    render() {
        EnhancedComponent.staticFunc();
        return (
            <div>
                <h3>注意事项：必须将静态方法做拷贝</h3>
                <EnhancedComponent data={{id: 1, name: '张三'}} extraProp="this is extra prop"/>
            </div>
        );
    }
}


