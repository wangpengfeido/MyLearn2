/**
 * Created by w1036_000 on 2017/3/13
 */
const userInput = '在jsx中插入用户输入是安全的，因为它会被渲染成字符串，防止xss';
const element = React.createElement('h1', { className: 'back-red' }, 'jsx相当于调用React.createElement函数');

ReactDOM.render(React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        { className: 'back-red', tabIndex: '1' },
        'jsx\u4E2D\u5C5E\u6027\u540D\u8981\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5,class\u53D8\u6210className'
    ),
    React.createElement(
        'h1',
        null,
        userInput
    ),
    element
), document.getElementById('root'));
//# sourceMappingURL=index01.js.map