import React, {Component} from 'react';

// Props的只读性。props不能被改变
// 组件类似于纯函数
class AdaAcaOne extends Component {
    render() {
        // 这样是不被允许的
        // this.props.name = 'aaa';
        return (
            <div>{this.props.name}</div>
        );
    }
}

export class AdaAca extends Component {
    render(){
        return (
            <AdaAcaOne name='adaaca'/>
        );
    }
}


