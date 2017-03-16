/**
 * Created by w1036_000 on 2017/3/13
 */
const element = React.createElement(
    'h1',
    null,
    'Hello World'
);

ReactDOM.render(element, document.getElementById('root'));
/////////////////////////////////////////////
function tick() {
    const element2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'ReactDOM.render\u53EA\u6E32\u67D3\u53D8\u5316\u7684\u90E8\u5206'
        ),
        React.createElement(
            'h2',
            null,
            '\u5F53\u524D\u65F6\u95F4\uFF1A',
            new Date().toLocaleTimeString()
        ),
        React.createElement(
            'h1',
            null,
            '\u4F46\u662F\u901A\u5E38\u53EA\u8C03\u7528\u4E00\u6B21ReactDOM.render\u65B9\u6CD5'
        )
    );
    ReactDOM.render(element2, document.getElementById('root2'));
}
setInterval(tick, 1000);
//# sourceMappingURL=index01.js.map