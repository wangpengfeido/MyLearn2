import React, {Component} from 'react';

function WrappedOne(props) {
    return (<div>
        <div>id:{props.data.id}</div>
        <div>name:{props.data.name}</div>
        <div>other:{props.other}</div>
    </div>);
}

// 高阶函数：返回高阶组件的函数，它可以使高阶组件只有“包裹组件”一个参数
function higherFunction(consoleText) {
    return function logProps(WrappedComponent) {
        return class extends Component {
            constructor(props) {
                super(props);
            }

            componentWillReceiveProps(nextProps) {
                console.log(consoleText);
                console.log('current props:', this.props);
                console.log('next props', nextProps);
            }

            render() {
                return (<WrappedComponent {...this.props}/>);
            }
        };
    };
}

const EnhancedComponent = higherFunction('tom')(WrappedOne);

export class AgaAda extends Component {
    render() {
        return (
            <div>
                <h3>约定：最大化使用组合</h3>
                <EnhancedComponent data={{id: 1, name: '张三'}}/>
            </div>
        );
    }
}

// 函数签名是 Component=>Component 的只有“包裹组件”一个参数的高阶组件，输入输出类型相同，很容易组合在一起
// 在组合种类型的高阶组件时：
// 不要使用 enhancedComponent=one(two(three(Component))); 这样的形式；
// 而是使用类似lodash.flow这样的工具 enhance=lodash.flow(one,two,three);enhancedComponent=enhance(Component)

