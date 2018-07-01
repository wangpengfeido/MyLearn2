import React, {Component} from 'react';

// 组件把应用分离成独立的可复用的碎片
// 组件接受props并决定如何显示ui

////////////////////////////////////////////////////
// 可以使用函数和类定义组件
// 函数方式：接收props对象并返回react元素。定义简单组件
function ElementOne(props) {
    return (<div>this is element one {props.name}</div>);
}
// 类方式：继承了Component，上面有props属性。比函数方式具有更多的特性
class ElementTwo extends Component{
    render(){
        return (
            <div>this is element two {this.props.name}</div>
        );
    }
}
export class AdaComponentsAndProps extends Component {
    render() {
        // 调用用户自定义属性
        // 当元素是自定义组件时，jsx把属性作为一个props对象传给组件
        return (
           <div>
               <ElementOne name='one'/>
               <ElementTwo name='two'/>
           </div>
        );
    }
}