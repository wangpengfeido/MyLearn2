import React, {Component} from 'react';

class One extends Component {
    constructor(props) {
        super(props);
        this.refInput = React.createRef();
    }

    handleFocusButtonClick = () => {
        // 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref 。
        // React 会在组件加载时将 DOM 元素传入 current 属性，在卸载时则会改回 null。
        // ref 的更新会发生在componentDidMount 或 componentDidUpdate 生命周期钩子之前。
        console.log(this.refInput.current);
        this.refInput.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.refInput}/>
                <button onClick={this.handleFocusButtonClick}>focus input</button>
            </div>
        )
    }
}

class ExampleOne extends Component {
    constructor(props) {
        super(props);
        this.a = 0;
        this.state = {
            myValue: '',
        };
    }

    handleChange = (event) => {
        this.setState({myValue: event.target.value});
        if (this.props.onMyChange) {
            this.props.onMyChange();
        }
    }

    render() {
        return <input value={this.state.myValue} onChange={this.handleChange}/>
    }
}

class Two extends Component {
    constructor(props) {
        super(props);
        this.refExampleOne = React.createRef();
    }

    handleMyChange = () => {
        // 当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current 。
        this.refExampleOne.current.a++;
        console.log(this.refExampleOne.current);
    }

    render() {
        return <ExampleOne ref={this.refExampleOne} onMyChange={this.handleMyChange}/>
    }
}

function ExampleTwo() {
    return <p>不能在函数式组件上使用ref</p>
}

function Three() {
    // 你不能在函数式组件上使用 ref 属性，因为它们没有实例
    // 但是，你可以在函数式组件内部使用 ref
    const refExampleTwo=React.createRef();
    const refInput=React.createRef();
    return (
        <div>
            {/* 如果在ExampleTwo上使用 ref={refExampleTwo} 是不可以的*/}
            <ExampleTwo/>
            <input ref={refInput}/>
        </div>
    )
}

export class AoaAba extends Component {
    render() {
        return (
            <div>
                <h3>访问refs</h3>
                <One/>
                <br/><br/><br/>
                <Two/>
                <br/><br/><br/>
                <Three/>
            </div>
        );
    }
}
