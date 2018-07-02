import React, {Component} from 'react';

function AdaAbaOne() {
    return (<div>ada aba one</div>)
}

class AdaAbaTwo extends Component {
    render() {
        // 组件可以输出应用其他组件
        return (
          <div>
              <AdaAbaOne/>
              <AdaAbaOne/>
          </div>
        );
    }
}

export class AdaAba extends Component {
    render() {
        return (
            <AdaAbaTwo/>
        );
    }
}

// 所以。
// 一个复杂组件可以提取成几个简单组件。使得组件更加可修改、可复用
