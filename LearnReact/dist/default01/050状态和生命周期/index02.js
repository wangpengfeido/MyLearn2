/**
 * Created by w1036_000 on 2017/3/10.
 */

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "hello world,",
                this.props.name
            ),
            React.createElement(
                "h1",
                null,
                "\u5F53\u524D\u65F6\u95F4\uFF1A",
                this.state.date.toLocaleTimeString()
            )
        );
    }
}

ReactDOM.render(React.createElement(Clock, { name: "wang" }), document.getElementById('root'));
//# sourceMappingURL=index02.js.map