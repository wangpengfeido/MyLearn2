import React, {Component} from 'react';

export class AoaAca extends Component {
    // TODO
    render() {
        return (
            <div>
                <h3>对父组件暴露DOM节点</h3>
                <p>如果想在父组件中访问子节点的DOM，可以使用ref转发，或者将 ref 作为特殊名字的 prop 直接传递</p>
            </div>
        );
    }
}
