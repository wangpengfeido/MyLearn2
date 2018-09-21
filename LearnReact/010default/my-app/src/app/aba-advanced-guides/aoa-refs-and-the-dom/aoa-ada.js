import React, {Component} from 'react';

class One extends Component {
    constructor(props) {
        super(props);
    }

    setTextInputRef = (element) => {
        this.textInput = element;
    }

    handleFocusButtonClick = () => {
        // React 将在组件挂载时将 DOM 元素传入ref 回调函数并调用，当卸载时传入 null 并调用它。
        // ref 回调函数会在 componentDidMout 和 componentDidUpdate 生命周期函数前被调用
        console.log(this.textInput);
        this.textInput.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.setTextInputRef}/>
                <button onClick={this.handleFocusButtonClick}>focus input</button>
            </div>
        )
    }
}

function CustomTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef}/>
        </div>
    );
}

class Two extends Component {
    consoleRef = () => {
        console.log(this.inputElement);
    }

    render() {
        // 与React.createRef()创建的refs一样，创建refs的回调函数也能通过属性传递
        // （对父组件暴露DOM节点）
        return (
            <div>
                {/*注意：如果ref回调函数定义成内联函数（如下），在更新时会被调用两次，第一次参数是 null ，之后参数是 DOM 元素*/}
                {/*这是因为在每次渲染中都会创建一个新的函数实例，React 需要清理旧的 ref 并且设置新的*/}
                {/*通过将 ref 的回调函数定义成类的绑定函数的方式可以避免上述问题，但是大多数情况下无关紧要。*/}
                <CustomTextInput inputRef={el => this.inputElement = el}/>
                <button onClick={this.consoleRef}>console ref</button>
            </div>
        )
    }
}

export class AoaAda extends Component {
    render() {
        return (
            <div>
                <h3>回调ref</h3>
                <One/>
                <br/>
                <Two/>
            </div>
        );
    }
}



