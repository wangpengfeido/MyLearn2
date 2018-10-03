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

const EnhancedComponent = logProps(WrappedOne);

export class AgaAha extends Component {
    constructor(props) {
        super(props);

        // ref是一个伪属性，它不能被传递
        // 现在ref指向的仍然是外层容器组件实例，而不是包裹组件实例
        this.myRef = React.createRef();

        // 如果要传递ref，应该优先考虑如何避免使用refs
        // 如果要非传递ref，可以使用React.forwardRef
        // 见 "../aea-forwarding-refs"
    }

    consoleRef() {
        console.log(this.myRef);
    }

    render() {
        return (
            <div>
                <h3>注意事项：Refs属性不能传递</h3>
                <EnhancedComponent data={{id: 1, name: '张三'}} extraProp="this is extra prop"
                                   ref={this.myRef}/>
                <button onClick={() => this.consoleRef()}>consoleRef</button>
            </div>
        );
    }
}



