import React, {Component} from 'react';
import {AnaAaa} from "./ana-aaa";
import {AnaAba} from "./ana-aba";

// 协调

// react更新元素树遵循一个O(n)算法
// 1.两个不同类型的元素将产生不同的树。
// 2.通过渲染器附带key属性，开发者可以示意哪些子元素可能是稳定的。

export class AnaReconciliation extends Component {
    render() {
        return (
            <div>
                <AnaAaa/>
                <br/><br/><br/>
                <AnaAba/>
            </div>
        );
    }
}
