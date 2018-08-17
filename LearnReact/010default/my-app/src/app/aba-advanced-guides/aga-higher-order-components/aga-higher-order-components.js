import React, {Component} from 'react';
import {AgaAaa} from "./aga-aaa";
import {AgaAba} from "./aga-aba";
import {AgaAca} from "./aga-aca";

// 高阶组件是react中对组件逻辑进行重用的技术
// 高阶组件本身不是react api，它只是一种模式，这种模式是由react自身的组合性质必然产生的

// 具体而言，高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
// 对比组件将props属性转变成UI，高阶组件则是将一个组件转换成另一个新组件

export class AgaHigherOrderComponents extends Component {
    render() {
        return (
            <div>
                <AgaAaa/>
                <br/><br/><br/>
                <AgaAba/>
                <br/><br/><br/>
                <AgaAca/>
            </div>
        );
    }
}

