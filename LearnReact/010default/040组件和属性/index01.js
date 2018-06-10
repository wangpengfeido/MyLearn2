/**
 * Created by w1036_000 on 2017/3/14.
 */

let name='wang';
// setInterval(()=>{name+='a';console.log(name)},1000);

//组件的首字母最好大写
function Welcome(props){
    return <h1>welcome,{props.name}</h1>
}

ReactDOM.render(
    <Welcome name={name}/>,
    document.getElementById('root')
);

