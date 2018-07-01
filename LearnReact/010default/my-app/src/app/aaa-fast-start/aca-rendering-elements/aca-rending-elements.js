import React, {Component} from 'react';

export class AcaRendingElements extends Component {
    render() {
        // react元素，使对象与浏览器dom保持一致
        const elementOne = (<div>this is element one</div>);

        ///////////////////////////////////////////////////
        // 查看src/index.js
        // 定义一个根元素，然后使用ReactDOM.render方法，将react元素渲染到根元素中


        //////////////////////////////////////////////////////
        // 当更新元素渲染时，react只渲染改变的那一部分，而不是全部渲染

        return (
            <div>
                <div>{elementOne}</div>
            </div>
        )
    }
}