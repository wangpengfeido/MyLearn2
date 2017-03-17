/**
 * Created by w1036_000 on 2017/3/14.
 */

let name = 'wang';
// setInterval(()=>{name+='a';console.log(name)},1000);

//组件的首字母最好大写
function Welcome(props) {
    return React.createElement(
        'h1',
        null,
        'welcome,',
        props.name
    );
}

ReactDOM.render(React.createElement(Welcome, { name: name }), document.getElementById('root'));
//# sourceMappingURL=index01.js.map