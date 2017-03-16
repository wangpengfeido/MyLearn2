/**
 * Created by w1036_000 on 2017/3/14.
 */

//组件的首字母最好大写
function Welcome(props) {
    return React.createElement(
        "h1",
        null,
        "welcome,",
        props.name
    );
}

ReactDOM.render(React.createElement(Welcome, { name: "wangpengfei" }), document.getElementById('root'));
//# sourceMappingURL=index01.js.map