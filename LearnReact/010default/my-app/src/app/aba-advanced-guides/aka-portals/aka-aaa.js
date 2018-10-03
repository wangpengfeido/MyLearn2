import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {isElement} from 'lodash';

/**
 * protals可以，将子节点渲染到父组件以外的DOM节点
 * ReactDOM.createPortal(child, container)
 * 第一个参数是React子元素，第二个参数是任意一个DOM元素
 */

class One extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (isElement(this.props.container)) {
            return ReactDOM.createPortal(
                <div>this is child</div>,
                this.props.container,
            );
        } else {
            return <div>未传入合法的container</div>
        }
    }
}

export class AkaAaa extends Component {
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

    render() {
        return (
            <div>
                <div>
                    本来在这里
                    <div>
                        <One container={this.state.containerRef}/>
                    </div>
                </div>
                <br/>
                <div>
                    渲染到这里来
                    <div ref={this.setRef}>
                        这是原来的，新的append到后面
                    </div>
                </div>
            </div>
        );
    }
}


