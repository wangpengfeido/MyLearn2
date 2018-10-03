import React, {Component} from "react";

/**
 * 描述见./aea-baa
 */

// 下面的ref不再是FancyButton的实例，而是FancyButton渲染的button DOM的实例

// 使用 React.forwardRef 传递ref实例
// 它可以接收ref参数，而普通的组件是不行的
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton" {...props}></button>
));

class One extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    consoleRef = () => {
        console.log(this.myRef.current);
    }

    render() {
        return (
            <div>
                <FancyButton ref={this.myRef} onClick={this.consoleRef}>
                    打印
                </FancyButton>
            </div>
        );
    }
}

export class AeaBaa extends Component {
    render() {
        return (
            <div>
                <One/>
            </div>
        )
    }
}

/**
 * 注意，如果你正在维护一个组件库，添加React.forwardRef应被视为破坏性的改变
 * 因为你的组件将有不同的表现（如ref指向，以及导出的类型），它将破坏旧有的应用
 * 根据条件判断使用React.forwardRef也一样
 */

