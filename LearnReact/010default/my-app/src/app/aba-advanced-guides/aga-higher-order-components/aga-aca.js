import React, {Component} from 'react';

function WrappedOne(props) {
    return (<div>
        <div>id:{props.data.id}</div>
        <div>name:{props.data.name}</div>
        <div>other:{props.other}</div>
    </div>);
}

// 约定：应该将 高阶组件实现无关的props 传递给wrapped组件。我的理解是不传递那些为实现高阶组件功能而用到的props
// 这样的好处是保证高阶组件的灵活性与可重用性

function logProps(WrappedComponent) {
    return class extends Component {
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
            // 为了实现上面的约定，render函数通常是这样的

            // 过滤掉 高阶组件实现相关的props ,不传递
            const {extraProp, ...passThroughProps} = this.props;

            // 传递给wrapped组件的额外props，一般是高阶组件的state或实例方法
            const injectedProp = this.state.other;

            // 传递props给wrapped组件
            return (<WrappedComponent other={this.state.other} {...passThroughProps}/>);
        }
    }
}

const EnhancedComponent = logProps(WrappedOne);

export class AgaAca extends Component {
    render() {
        return (
            <div>
                <h3>约定：将不相关的props属性传递给包裹组件</h3>
                <EnhancedComponent data={{id: 1, name: '张三'}} extraProp="this is extra prop"/>
            </div>
        )
    }
}