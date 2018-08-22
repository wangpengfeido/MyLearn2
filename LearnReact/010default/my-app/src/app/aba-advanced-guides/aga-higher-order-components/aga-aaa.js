import React, {Component} from 'react';
import {getUserAgeById, getUserGenderById, getUsers} from "./example";

function WrappedOne(props) {
    return (<div>
        <div>id:{props.data.id}</div>
        <div>name:{props.data.name}</div>
        <div>age:{props.data.age}</div>
    </div>);
}

function WrappedTwo(props) {
    return (<div>
        <div>id:{props.data.id}</div>
        <div>name:{props.data.name}</div>
        <div>gender:{props.data.gender}</div>
    </div>);
}

function WrappedThree(props) {
    return (
        props.data.map((user) => (
            <div key={user.id}>{user.id}:{user.name}</div>
        ))
    )
}

function higherComponent(WrappedComponent, getData) {
    // 抽象了加载数据的逻辑
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: getData(this.props),
            }
        }

        render() {
            return (
                <WrappedComponent data={this.state.data} {...this.props}/>
            )
        }
    }
}

// 当多个组件有相同的逻辑模式时，就可以将这种逻辑在高阶组件中定义出来，然后对所有的组件使用

const AgeComponent = higherComponent(WrappedOne, getUserAgeById);
const GenderComponent = higherComponent(WrappedTwo, getUserGenderById);
const UsersComponent = higherComponent(WrappedThree, getUsers);

export class AgaAaa extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AgeComponent userId="10000"/>
                <br/>
                <GenderComponent userId="20000"/>
                <br/>
                <UsersComponent/>
            </div>
        );
    }
}

// 高阶组件既不会修改原组件，也不会使用继承复制原组件的行为
// 高阶组件是通过将原组件 包裹（wrapping） 在容器组件（container component）里面的方式来 **组合（composes）** 使用原组件。
// 高阶组件就是一个没有副作用的纯函数。
