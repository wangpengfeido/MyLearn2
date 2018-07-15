import React, {Component} from 'react';

// 在react中，推荐使用组合而非继承来实现组件的代码复用

// 包含关系

class A extends Component {
    render() {
        // 一些组件不能提前知道它们的子组件是什么。
        // 可以使用children 属性将子元素直接传递到输出。
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class InsertToA extends Component {
    render() {
        return (
            <div>
                {/*通过嵌套来传递子组件*/}
                <A>
                    <p>this is sth insert to A</p>
                </A>
            </div>
        )
    }
}

class B extends Component {
    render() {
        // 如果需要多个插入入口，那么用属性而不是children
        return (
            <div>
                {this.props.left}
                {this.props.right}
            </div>
        )
    }
}

class InsertToB extends Component {
    render() {
        // 使用属性插入到B
        return (
            <div>
                <B
                    left={<p>this is sth insert to B left</p>}
                    right={<p>this is sth insert to B right</p>}>
                </B>
            </div>
        )
    }
}

export class AkaAaa extends Component {
    render() {
        return (
            <div>
                <InsertToA/>
                <br/><br/><br/>
                <InsertToB/>
            </div>
        )
    }
}

