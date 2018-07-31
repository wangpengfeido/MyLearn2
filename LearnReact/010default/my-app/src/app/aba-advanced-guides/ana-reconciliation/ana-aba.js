import React, {Component} from 'react';

export class AnaAba extends Component {
    render() {
        // 子树在其兄弟节点中移动，但你无法告知其移动到哪(不使用key)。该算法会重渲整个子树.

        // 应该注意以下两点
        // 1.算法无法尝试匹配不同组件类型的子元素。若你发现两个输出非常相似的组件类型交替出现，你可能希望使其成为相同类型。
        // 2.Keys应该是稳定的，可预测的，且唯一的。不稳定的key（类似由Math.random()生成的）将使得大量组件实例和DOM节点进行不必要的重建，使得性能下降并丢失子组件的状态。
        return (
            <div>
                <h3>权衡</h3>
            </div>
        );
    }
}
