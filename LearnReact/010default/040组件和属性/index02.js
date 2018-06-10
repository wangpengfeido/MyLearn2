/**
 * Created by w1036_000 on 2017/3/14.
 */

//属性是只读的
function Welcome(props) {
    return <h1>welcome,{props.name}</h1>
}

//组件必须返回带有根节点的Dom
//组件中可以包含其他组件
//可以将一个大组件拆分成多个小组件
function App() {
    return (
        <div>
            <Welcome name="zhangsan"/>
            <Welcome name="lisi"/>
            <Welcome name="wangwu"/>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

