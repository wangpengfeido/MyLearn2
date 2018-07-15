import React, {Component} from 'react';

// 特殊实例
// 有时我们认为组件是其他组件的特殊实例。
// 通过配置属性用较特殊的组件来渲染较通用的组件。

class A extends Component {
    render() {
        return (
            <div>
                {this.props.name}:{this.props.value}
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function SpecialA() {
    // 配置特殊的属性值
    return (
        <div>
            <A name="张三" value="你好"/>
        </div>
    )
}

class SpecialATwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "李四",
            value: "晚上好",
        }
    }

    handleInputChange = event => {
        this.setState({
            name: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <A name={this.state.name} value={this.state.value}>
                    输入姓名：<input value={this.state.name} onChange={this.handleInputChange}/>
                </A>
            </div>
        );
    }
}

export class AkaAba extends Component {
    render() {
        return (
            <div>
                <SpecialA/>
                <br/><br/><br/>
                <SpecialATwo/>
            </div>
        )
    }
}

// 如果要复用UI无关的功能，建议使用js模块

