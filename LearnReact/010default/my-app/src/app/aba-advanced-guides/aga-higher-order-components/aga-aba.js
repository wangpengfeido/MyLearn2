import React, {Component} from 'react';

function WrappedOne(props) {
    return (<div>
        <div>id:{props.data.id}</div>
        <div>name:{props.data.name}</div>
    </div>);
}

// 不要改变原组件。而是使用组合

////////// 错误的做法：修改了原组件////////////////////////
function logProps(inputComponent) {
    inputComponent.prototype.componentWillReceiveProps = function (nextProps) {
        console.log('current props:', this.props);
        console.log('next props', nextProps);
    };
    return inputComponent;
}

// 缺点：
// 1.input组件不再能脱离增强型组件重用
// 2.当用另一个高阶组件转变EnhancedComponent，再次改变componentWillReceiveProps时，第一次的功能会被覆盖
// 3.无法应用于无生命周期钩子的无状态函数式组件
/////////////////////////////////////////////////////////////////

// 正确的做法是用组合的方式
function logPropsTwo(WrappedComponent) {
    return class extends Component {
        componentWillReceiveProps(nextProps) {
            console.log('current props:', this.props);
            console.log('next props', nextProps);
        }

        render() {
            return (<WrappedComponent {...this.props}/>)
        }
    }
}

const EnhancedComponent = logPropsTwo(WrappedOne);

export class AgaAba extends Component {
    render() {
        return (
            <div>
                <EnhancedComponent data={{id: 1, name: '张三'}}/>
            </div>
        )
    }
}

// 高阶组件和容器组件是相似的。可以认为高阶组件是参数化的容器组件的定义
