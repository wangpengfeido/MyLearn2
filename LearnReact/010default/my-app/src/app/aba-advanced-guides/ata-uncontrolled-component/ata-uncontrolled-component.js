import React, {Component} from 'react';

// 在受控组件中，表单数据由 React 组件处理。如果让表单数据由 DOM 处理时，替代方案为使用非受控组件。

class One extends Component {
    constructor(props) {
        super(props);
        this.relInputName = React.createRef();
    }

    // 可以 使用 ref 从 DOM 获取表单值
    // 非受控组件将真实数据保存在 DOM 中。因此在使用非受控组件时，更容易同时集成 React 和非 React 代码。
    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.relInputName.current.value);
    }

    // 可以使用defaultValue指定默认值，而不是使用value
    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>
                    name:
                    <input ref={this.relInputName} defaultValue={"Tom"}/>
                </label>
                <input type="submit" value='submit'/>
            </form>
        )
    }
}

class Two extends Component {
    constructor(props) {
        super(props);
        this.relFileInput = React.createRef();
    }

    // <input type="file" /> 始终是一个不受控制的组件，因为它的值只能由用户设置

    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.relFileInput.current.files[0].name);
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="file" ref={this.relFileInput}/>
                <input type="submit" value='submit'/>
            </form>
        )
    }
}

export class AtaUnControlledComponent extends Component {
    render() {
        return (
            <div>
                <One/>
                <br/><br/><br/>
                <Two/>
            </div>
        );
    }
}
