/**
 * Created by w1036_000 on 2017/3/14.
 */

let firstName = 'wang';
// setInterval(() => {
//     firstName += 'a'
// }, 1000);


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lastName: 'pengfei', fullName: 'wangpengfei' };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        //setState可能是异步执行的，因此在结合props和state中的值时，应该采用如下方式，第一个参数为先前state，第二个参数是当时的props
        //setState是合并的，因此改变state中的一个值，其他的值不变
        this.setState((prevState, props) => ({
            fullName: props.firstName + prevState.lastName
        }));
    }

    render() {
        return React.createElement(
            'h1',
            null,
            'welcome,',
            this.props.firstName,
            '-',
            this.state.lastName,
            '-',
            this.state.fullName
        );
    }
}

ReactDOM.render(React.createElement(Welcome, { firstName: firstName }), document.getElementById('root'));
//# sourceMappingURL=index04.js.map