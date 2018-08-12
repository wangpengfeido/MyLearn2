import React, {Component, Fragment} from 'react';

class Example extends Component {
    render() {
        return (<span>{this.props.myName}</span>);
    }

    componentWillMount() {
        console.log(this.props.myName, 'will mount(one)');
    }

    componentWillUnmount() {
        console.log(this.props.myName, 'will unmount(one)');
    }

    componentWillReceiveProps() {
        console.log(this.props.myName, 'will receiveProps(one)');
    }

    componentWillUpdate() {
        console.log(this.props.myName, 'will update(one)');
    }
}

class ExampleTwo extends Component {
    render() {
        return (<span>{this.props.myName}</span>);
    }

    componentWillMount() {
        console.log(this.props.myName, 'will mount(two)');
    }

    componentWillUnmount() {
        console.log(this.props.myName, 'will unmount(two)');
    }

    componentWillReceiveProps() {
        console.log(this.props.myName, 'will receiveProps(two)');
    }

    componentWillUpdate() {
        console.log(this.props.myName, 'will update(two)');
    }
}

class ExampleThree extends Component {
    render() {
        return (<span>{this.props.myName}</span>);
    }

    componentWillMount() {
        console.log(this.props.myName, 'will mount(three)');
    }

    componentWillUnmount() {
        console.log(this.props.myName, 'will unmount(three)');
    }

    componentWillReceiveProps() {
        console.log(this.props.myName, 'will receiveProps(three)');
    }

    componentWillUpdate() {
        console.log(this.props.myName, 'will update(three)');
    }
}

class One extends Component {
    // 当根元素类型不同时，将会重建根元素下的所有节点
    constructor(props) {
        super(props);
        this.state = {
            showStatus: true,
        }
    }

    handleChangeStatus = () => {
        this.setState((prevState => ({
            showStatus: !prevState.showStatus,
        })));
    }

    render() {
        let element;
        // 根元素下的组件将会被重建
        if (this.state.showStatus) {
            element = <div><Example myName="a"/></div>;
        } else {
            element = <span><Example myName="a"/></span>;
        }
        return (
            <div>
                <h5>不同类型的元素</h5>
                {element}
                <button onClick={this.handleChangeStatus}>change show status</button>
            </div>
        );
    }
}

class Two extends Component {
    // 比较两个相同类型的DOM元素时，将会保持下面的节点，仅更新属性
    // 子组件节点的componentWillReceiveProps和componentWillUpdate钩子仍然会被执行
    constructor(props) {
        super(props);
        this.state = {
            showStatus: true,
        }
    }

    handleChangeStatus = () => {
        this.setState((prevState => ({
            showStatus: !prevState.showStatus,
        })));
    }

    render() {
        let element;
        if (this.state.showStatus) {
            element = (<div title="true" style={{backgroundColor: 'green'}}>
                <Example myName="a"/>
            </div>);
        } else {
            element = (<div title="false" style={{backgroundColor: 'blue'}}>
                <Example myName="a"/>
            </div>)
        }
        return (
            <div>
                <h5>相同类型的DOM元素</h5>
                {element}
                <button onClick={this.handleChangeStatus}>change show status</button>
            </div>
        );
    }
}

class Three extends Component {
    // 比较两个相同类型的组件元素时，将会保持同一个实例
    // componentWillReceiveProps和componentWillUpdate钩子被执行
    constructor(props) {
        super(props);
        this.state = {
            showStatus: true,
        }
    }

    handleChangeStatus = () => {
        this.setState((prevState => ({
            showStatus: !prevState.showStatus,
        })));
    }

    render() {
        let element;
        if (this.state.showStatus) {
            element = (<Example myName="a"/>);
        } else {
            element = (<Example myName="b"/>)
        }
        return (
            <div>
                <h5>相同类型的组件元素</h5>
                {element}
                <button onClick={this.handleChangeStatus}>change show status</button>
            </div>
        );
    }
}

class Four extends Component {
    // react比较新旧两个子节点列表，并在有不同时产生一个变更
    // 当调整了子节点的顺序时，react可能会重建每个子节点。通常在结尾插入不会。解决这个问题可以使用key属性
    constructor(props) {
        super(props);
        this.state = {
            showStatus: true,
        }
    }

    handleChangeStatus = () => {
        this.setState((prevState => ({
            showStatus: !prevState.showStatus,
        })));
    }

    render() {
        let element;
        if (this.state.showStatus) {
            element = (<div>
                <Example myName="a"/>
                <ExampleTwo myName="a"/>
            </div>);
        } else {
            element = (<div>
                <ExampleThree myName="b"/>
                <Example myName="b"/>
                <ExampleTwo myName="b"/>
                {/*<ExampleThree myName="b"/>*/}
            </div>)
        }
        return (
            <div>
                <h5>递归子节点</h5>
                {element}
                <button onClick={this.handleChangeStatus}>change show status</button>
            </div>
        );
    }
}

class Five extends Component {
    // React使用key来匹配原本树的子节点和新树的子节点。这样就会有更少的节点被重建
    constructor(props) {
        super(props);
        this.state = {
            showStatus: true,
        }
    }

    handleChangeStatus = () => {
        this.setState((prevState => ({
            showStatus: !prevState.showStatus,
        })));
    }

    render() {
        let element;
        if (this.state.showStatus) {
            element = (<div>
                <Example key="1" myName="a"/>
                <ExampleTwo key="2" myName="a"/>
            </div>);
        } else {
            element = (<div>
                <ExampleThree key="3" myName="b"/>
                <Example key="1" myName="b"/>
                <ExampleTwo key="2" myName="b"/>
            </div>)
        }
        return (
            <div>
                <h5>使用key</h5>
                {element}
                <button onClick={this.handleChangeStatus}>change show status</button>
            </div>
        );
    }
}

export class AnaAaa extends Component {
    render() {
        return (
            <div>
                <h3>对比算法</h3>
                <One/>
                <br/><br/><br/>
                <Two/>
                <br/><br/><br/>
                <Three/>
                <br/><br/><br/>
                <Four/>
                <br/><br/><br/>
                <Five/>
            </div>
        );
    }
}
