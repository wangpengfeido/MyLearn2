/**
 * Created by w1036_000 on 2017/3/14.
 */

//组件的首字母最好大写
function Welcome(props){
    return <h1>welcome,{props.name}</h1>
}


ReactDOM.render(
    <Welcome name="wangpengfei"/>,
    document.getElementById('root')
);

