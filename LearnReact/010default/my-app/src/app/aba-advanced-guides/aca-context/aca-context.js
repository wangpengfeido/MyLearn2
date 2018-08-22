import React, {Component} from 'react';
import {AcaAaa} from "./aca-aaa";
import {AcaAba} from "./aca-aba";
import {AcaAcaDynamicContext} from "./aca-aca-dynamic-context";
import {AcaAdaUpdatingContextFromANestedComponent} from "./aca-ada-updating-context-from-a-nested-component";
import {AcaAeaConsumingMultipleContext} from "./aca-aea-consuming-multiple-contexts";
import {AcaAfaAccessingContextInLifecycleMethod} from "./aca-afa-accessing-context-in-lifecycle-method";

// 通常，数据是通过 props 属性由上向下（由父及子）的进行传递的。但这对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI主题），这是应用程序中许多组件都所需要的。 Context 提供了一种在组件之间共享此类值的方式，而不必通过组件树的每个层级显式地传递 props 。

// Context 设计目的是为共享那些被认为对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言。

export class AcaContext extends Component {
    render() {
        return (
            <div>
                <AcaAaa/>
                <br/><br/><br/>
                <AcaAba/>
                <br/><br/><br/>
                <AcaAcaDynamicContext/>
                <br/><br/><br/>
                <AcaAdaUpdatingContextFromANestedComponent/>
                <br/><br/><br/>
                <AcaAeaConsumingMultipleContext/>
                <br/><br/><br/>
                <AcaAfaAccessingContextInLifecycleMethod/>
            </div>
        );
    // TODO:没完
    }
}
