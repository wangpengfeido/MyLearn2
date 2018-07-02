import React, {Component} from 'react';
import {AdaAba} from "./ada-aba";
import {AdaAca} from "./ada-aca";

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
// 注意：组件名称必须以大写字母开头
export class AdaComponentsAndProps extends Component {
    render() {
        // 调用用户自定义属性
        // 当元素是自定义组件时，jsx把属性作为一个props对象传给组。调用过程如下：
        // 1.对组件（<ElementOne/>）使用ReactDom.render()
        // 2.将属性作为props传给组件
        // 3.组件将render()方法返回的元素返回
        // 4.更新DOM
        return (
           <div>
               <ElementOne name='one'/>
               <ElementTwo name='two'/>
               <br/><br/><br/>
               <AdaAba/>
               <br/><br/><br/>
               <AdaAca/>
           </div>
        );
    }
}