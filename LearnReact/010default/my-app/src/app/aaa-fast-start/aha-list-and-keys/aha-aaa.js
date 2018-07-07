import React, {Component} from 'react';

// 在react中，可以把数组渲染为多个元素

export class One extends Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        // 为每个数组元素创建一个JSX元素
        const listItems = numbers.map((number, index) => (<li key={index}>{number}</li>));
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export class Two extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const numbers = this.props.numbers;
        // key属性用来区分元素。当增加、删除、重排元素时，识别哪些元素进行重新渲染
        // key应该添加在互为兄弟元素的元素上
        // key在互为兄弟的元素上应该唯一，但并不是全局唯一
        // key的值不会传递给组件。
        const listItems = numbers.map((number, index) => (<li key={index}>{number}</li>));
        return (
            <div>
                <ul>
                    {listItems}
                </ul>
                {/*也可以内嵌在jsx中。因为花括号中可插入任何表达式*/}
                <ul>
                    {numbers.map((number, index) => (<li key={index}>inner:{number}</li>))}
                </ul>
            </div>
        );
    }
}

export class AhaAaa extends Component {
    render() {
        return (
            <div>
                <One/>
                <br/><br/><br/>
                <Two numbers={[4, 6, 7]}/>
            </div>
        )
    }
}

