import React, {Component} from 'react';
import {Clock} from "./aaa-aba";

/**
 * 数据自顶向下流动
 * 父组件或子组件都不能知道某个组件是有状态还是无状态
 * 状态除了拥有并设置它的组件外，其它组件不可访问
 */

/**
 * 自顶向下/单向数据流
 * 任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件
 * 子组件也不用关心数据从何而来
 */

export class AaaAca extends Component{
    render() {
        // 三个组件的状态互不影响
        return (
            <div>
                <Clock/>
                <Clock/>
                <Clock/>
            </div>
        );
    }
}