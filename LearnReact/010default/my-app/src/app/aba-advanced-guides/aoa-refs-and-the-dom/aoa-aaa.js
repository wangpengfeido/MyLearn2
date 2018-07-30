import React, {Component} from 'react';

// Refs 提供了一种方式，用于访问在 render 方法中创建的 DOM 节点或 React 元素。

/**
 * Refs 提供了一种方式，用于访问在 render 方法中创建的 DOM 节点或 React 元素。
 * 处理焦点、文本选择或媒体控制。
 * 触发强制动画。
 * 集成第三方 DOM 库
 */

/**
 * 不要过度使用 Refs
 */

class One extends Component {
    constructor(props) {
        super(props);
        // 使用React.createRef创建refs
        this.myRef = React.createRef();
    }

    handleClick = () => {
        // 使用current属性访问节点
        console.log(this.myRef.current);
    }

    render() {
        return (
            <div>
                {/*通过ref属性获取react元素*/}
                <div ref={this.myRef} onClick={this.handleClick}>One</div>
            </div>
        )
    }
}

export class AoaAaa extends Component {
    render() {
        return (
            <div>
                <One/>
            </div>
        );
    }
}
