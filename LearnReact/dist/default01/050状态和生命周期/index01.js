/**
 * Created by w1036_000 on 2017/3/10.
 */

//属性改为this.props
class Clock extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'hello world'
            ),
            React.createElement(
                'h1',
                null,
                '\u5F53\u524D\u65F6\u95F4\uFF1A',
                this.props.date.toLocaleTimeString()
            )
        );
    }
}

ReactDOM.render(React.createElement(Clock, { date: new Date() }), document.getElementById('root'));
//# sourceMappingURL=index01.js.map