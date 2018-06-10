import React, {Component} from 'react';
import './square.css';

// export class Square extends Component {
//     render() {
//         return (
//             <button className="square" onClick={()=>this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

//使用函数定义简单组件
//onClick使用了简单写法
export function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

