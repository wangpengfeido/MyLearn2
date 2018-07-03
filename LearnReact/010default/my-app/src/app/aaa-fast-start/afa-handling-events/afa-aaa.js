import React, {Component} from 'react';

// 与DOM事件语法的不同：
// 1.事件名采用驼峰写法
// 2.传入事件处理函数，而不是字符串
export class AfaAaa extends Component {
    oneClickHandler(event) {
        // 阻止默认行为时，必须明确使用preventDefault，而不能使用return false
        event.preventDefault();
        // 注意：类方法的this默认是不被绑定的。如果this未绑定，那么它就是undefined。下面的几种方式可以解决此问题
        console.log('one is clicked', this);
    }

    // 一种是使用，试验中的，属性初始化器
    twoClickHandler = (event) => {
        event.preventDefault();
        console.log('two is clicked', this);
    }

    // 另一种是使用箭头函数作为回调，见one-two
    // 缺点：当作为属性传入时，有可能导致组件的重新渲染

    // 再就是使用bind方法，见one-three


    // 有两种方式向事件处理程序传参
    // 使用箭头函数和bind方法
    threeClickHandler(params, event) {
        event.preventDefault();
        console.log('three is clicked', params, this);
    }

    render() {
        return (
            <div>
                <div><a onClick={this.oneClickHandler}>one</a></div>
                <div><a onClick={this.twoClickHandler}>two</a></div>
                <div><a onClick={(e) => {this.twoClickHandler(e)}}>one-two</a></div>
                <div><a onClick={this.oneClickHandler.bind(this)}>one-three</a></div>
                <div><a onClick={(e)=>this.threeClickHandler('a',e)}>three-one</a></div>
                <div><a onClick={this.threeClickHandler.bind(this,'b')}>three-two</a></div>
            </div>
        );
    }
}

