import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {isElement} from 'lodash';

/**
 * portal 可以被放置在 DOM 树的任何地方，但在其他方面其行为和普通的 React 子节点行为一致。
 * 如*上下文特性*依然能够如之前一样正确地工作，无论其子节点是否是 portal
 * 由于 portal 仍存在于 React 树中，而不用考虑其在 DOM 树中的位置。
 */

class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (isElement(this.props.container)) {
            return ReactDOM.createPortal(
                this.props.children,
                this.props.container,
            );
        } else {
            return <div>未传入合法的container</div>
        }
    }
}

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
    }

    handleClick = () => {
        this.setState((prevState) => ({
            clicks: prevState.clicks + 1,
        }));
    }

    render() {
        // 渲染后的button并不是click事件所在div的孩子，但click事件仍然能冒泡到那个div
        // 事件冒泡按照react的组件树结构进行，而不按照渲染的html dom树进行
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks:{this.state.clicks}</p>
                <p>打开浏览器开发者工具可以看到：button并不是click事件所在div的孩子</p>
                <Modal container={this.props.container}>
                    <Child></Child>
                </Modal>
            </div>
        );
    }
}

function Child() {
    // 因为这里没有onClick事件定义，
    // 所以click事件将向上冒泡
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
}

class One extends Component {
    constructor(props) {
        super(props);

        this.state = {
            containerRef: null,
        };
    }

    setRef = (element) => {
        this.setState({
            containerRef: element,
        });
    }

    handleModelClick = () => {
        // 事件并没有冒泡到这里
        console.log('.................handle model click')
    }

    render() {
        return (
            <div>
                <div id="app-root">
                    <Parent container={this.state.containerRef}/>
                </div>
                <div id="app-modal-root" ref={this.setRef} onClick={this.handleModelClick}>
                    按钮被渲染到这里来
                </div>
            </div>
        );
    }
}

export class AkaAba extends Component {
    render() {
        return (
            <div>
                <h3>通过 Portals 进行事件冒泡</h3>
                <One/>
            </div>
        );
    }
}

/**
 * 在父组件里捕获一个来自 portal 的事件冒泡能够在开发时具有不完全依赖于 portal 的更为灵活的抽象。
 * 例如，若你在渲染一个 <Modal /> 组件，父组件能够捕获其事件而无论其是否采用 portal 实现。
 * 我的理解：在使用一个组件时，不用管它内部是否使用了protal，都可以正常捕获其事件
 */




