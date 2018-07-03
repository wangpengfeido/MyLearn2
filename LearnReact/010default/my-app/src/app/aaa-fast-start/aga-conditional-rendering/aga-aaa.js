import React, {Component} from 'react';

class One extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 使用if等条件运算符控制渲染哪些元素
        if (this.props.isRender) {
            return (<div>render</div>);
        } else {
            return (<div>ha ha ha</div>);
        }
    }
}

class Two extends Component {
    constructor(props) {
        super(props);
        this.state = {isRender: true};
    }

    toggleHandler() {
        this.setState((prevState) => ({
            isRender:!prevState.isRender,
        }));
    }

    render() {
        // 可以使用元素变量来控制渲染哪些元素
        let renderDom;
        if (this.state.isRender) {
            renderDom = (<div>render</div>);
        } else {
            renderDom = (<div>ha ha ha</div>);
        }
        return (
            <div>
                <button onClick={(e)=>{this.toggleHandler(e)}}>toggle</button>
                {renderDom}
            </div>
        );
    }
}

export class AgaAaa extends Component {
    render() {
        return (
            <div>
                <One isRender={true}/>
                <One isRender={false}/>
                <br/><br/><br/>
                <Two/>
            </div>
        );
    }
}

