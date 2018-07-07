import React, {Component} from 'react';

class One extends Component {
    // 受控组件：其值由React控制的输入表单元素称为“受控组件”
    // React仍然控制渲染的表单的组件上，用户后续输入时所发生的变化。即将值赋在value上，再通过事件监听表单变化改变该值
    constructor(props) {
        super(props);
        this.state = {
            name: 'this is name',
            upper: 'upper',
            textArea: 'this is text area',
            select: 3,
        };
    }

    nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }

    upperChangeHandler = (event) => {
        // 可以将限制用户输入或表单验证写在这里
        this.setState({upper: event.target.value.toUpperCase()});
    }

    textAreaChangeHandler = (event) => {
        this.setState({textArea: event.target.value});
    }

    selectChangeHandler = (event) => {
        this.setState({select: event.target.value});
    }

    render() {
        return (
            <div>
                <div><input type='text' name='name' value={this.state.name} onChange={this.nameChangeHandler}/></div>
                <div><input type='text' name='name' value={this.state.upper} onChange={this.upperChangeHandler}/></div>
                <div>
                    {/*在react的textarea中，不再使用子节点表示值，而是使用value属性*/}
                    <textarea value={this.state.textArea} onChange={this.textAreaChangeHandler}></textarea>
                </div>
                <div>
                    {/*在react的select中，不再使用selected属性表示是否选中，而是使用value属性*/}
                    {this.state.select}
                    <select value={this.state.select} onChange={this.selectChangeHandler}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={[3]}>3</option>
                        {/*可以在value设为一个数组，这样可同时选择多个值*/}
                        <option multiple={true} value={[4, 5]}>4,,,,5</option>
                    </select>
                </div>
                <div>
                    {/*注意，因为input的value是只读的，所以file input是非受控组件*/}
                    <input type="file"/>
                </div>
            </div>
        );
    }
}

class Two extends Component {
    constructor(props) {
        super(props);
        this.state = {
            one: 'one',
            two: 'two'
        };
    }

    inputChangeHandler = (event) => {
        // 当有多个表单控件时，可以使用同一个更改事件响应方法。在方法中用name和type等区分不同控件
        let target = event.target;
        let name = target.name;
        this.setState({
            [name]: target.value,
        });
    }

    render() {
        return (
            <div>
                <input name="one" value={this.state.one} onChange={this.inputChangeHandler}/>
                <input name="two" value={this.state.two} onChange={this.inputChangeHandler}/>
            </div>
        );
    }

}

class Three extends Component {
    changeHandler() {

    }

    render() {
        return (
            <div>
                {/*当input的value设置为一个值，input将不可编辑*/}
                {/*但如果设置为undefined，input将可以编辑*/}
                <input value="hello" onChange={this.changeHandler}/>
                <input value={undefined} onChange={this.changeHandler}/>
            </div>
        )
    }
}

export class AiaAaa extends Component {
    render() {
        return (
            <div>
                <One/>
                <br/><br/><br/>
                <Two/>
                <br/><br/><br/>
                <Three/>
            </div>
        );
    }
}

// 使用受控组件可能比较繁琐，这时候可以使用非受控组件

