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
            isRender: !prevState.isRender,
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
                <button onClick={(e) => {this.toggleHandler(e)}}>toggle</button>
                {renderDom}
                <div>
                    {/*花括号中可以嵌入任何表达式*/}
                    /*与运算符*/
                    {this.state.isRender && (<div>render</div>)}
                </div>
                <div>
                    /*三目运算符*/
                    {this.state.isRender ? 'render' : 'notrender'}
                    {this.state.isRender ?
                        (<div style={{color: 'red'}}>render</div>) :
                        (<div style={{color: 'green'}}>not render</div>)}
                </div>
            </div>
        );
    }
}

class Three extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 阻止组件渲染
        if (this.props.render === false) {
            // 让render方法返回null可以阻止组件渲染。即这个组件不会渲染任何东西在页面上
            // 并不会影响生命周期钩子的调用
            return null
        }else{
            return (<div>render</div>);
        }
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
                <br/><br/><br/>
                <Three render={true}/>
                <Three render={false}/>
            </div>
        );
    }
}

