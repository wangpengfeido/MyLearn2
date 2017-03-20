"use strict";

/**
 * Created by w1036_000 on 2017/3/14.
 */

//属性是只读的
function Welcome(props) {
    return React.createElement("h1", null, "welcome,", props.name);
}

//组件必须返回带有根节点的Dom
//组件中可以包含其他组件
//可以将一个大组件拆分成多个小组件
function App() {
    return React.createElement("div", null, React.createElement(Welcome, { name: "zhangsan" }), React.createElement(Welcome, { name: "lisi" }), React.createElement(Welcome, { name: "wangwu" }));
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=index02.js.map
//# sourceMappingURL=index02.js.map