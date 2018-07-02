import React, {Component} from 'react';

// 现在，我们为组件添加state和生命周期
export class Clock extends Component {
    constructor(props) {
        super(props);
        // 初始化state
        this.state = {date: new Date()};
    }

    // 生命周期钩子
    componentDidMount() {
        // 如果存储不需要ui输出的东西，可以向类添加其他属性。而不是将其放在state中
        this.timeerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeerID);
    }

    tick() {
        // 使用setState来更新state
        this.setState({
            date: new Date(),
        });
        // 注意：
        // 1.不要直接更新state。如：不要使用this.state.date=xxx
        // 而且构造函数是唯一能够初始化this.state的地方

        // 2.因为this.props和this.state可能是异步更新的，所以不要用它们的值计算下个状态
        // 而是使用setState的函数参数形式
        // 不要：
        // this.setState({
        //     date: new Date(this.state.date.getTime() + 1000),
        // });
        // 而是：
        // this.setState((prevState, props) => ({
        //     date: new Date(prevState.date.getTime() + 1000),
        // }));

        // 3.状态更新合并。可以把多个state放在一起更新，也可以单独更新
        // 合并是浅合并。例如在这里，更新了newState后，date仍会保留
        this.setState({
            newState:'new state',
            newStateTwo:'new state two'
        });
    }

    render() {
        return (
            // 使用state
            <div>
                <div>time:{this.state.date.toLocaleTimeString()}</div>
                <div>{this.state.newState}</div>
            </div>
        );
    }
}

export class AaaAba extends Component {
    render() {
        return (
            <Clock/>
        );
    }

// 调用过程：
// 1.<Clock/>传递给ReactDom.render()时，调用其构造方法，初始化state
// 2.render()方法被调用，生成插入到DOM的内容
// 3.<Clock/>输出插入到DOM时，调用componentDidMount钩子
// 4.每秒调用tick()方法，并在其中使用setState()，使用后react再次调用render()方法
// 5.<Clock/>从DOM移除时，调用componentWillUnmount钩子
}



