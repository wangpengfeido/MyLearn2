import React, {Component} from 'react';

/**
 * Fragments 可以让你聚合一个子元素列表，并且不在DOM中增加额外节点。
 */

function One() {
    // 例如，当一个组件需要返回几个子元素，可以用"React.Fragment"将其包裹，包裹的fragment不会渲染到DOM中
    // 相比较如果使用div等其他元素，会渲染到DOM中，破坏html的结构
    return (
        <React.Fragment>
            <td>hello</td>
            <td>world</td>
        </React.Fragment>
    )
}


function Two() {
    // fragment还有一种简短语法，类似于空标签
    // 注意：1.简短语法不支持 keys 和 attributes
    //       2.有的开发工具不支持此语法
    return (
        // <>
        <React.Fragment>
            <td>简短</td>
            <td>写法</td>
        </React.Fragment>
        // </>
    )
}

function Three() {
    let data = [1, 2, 3];
    // <React.Fragment>语法可以带有key
    // 现在，key是唯一一个可传递给fragment的属性
    return (
        <dl>
            {data.map(item =>
                <React.Fragment key={item}>
                    <dt>{item}</dt>
                    <dd>{item}</dd>
                </React.Fragment>
            )}
        </dl>
    )
}

export class AfaAaa extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <One/>
                    </tr>
                    <tr>
                        <Two/>
                    </tr>
                    </tbody>
                </table>
                <Three/>
            </div>
        );
    }
}