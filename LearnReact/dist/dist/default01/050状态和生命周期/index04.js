'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by w1036_000 on 2017/3/14.
 */

var firstName = 'wang';
// setInterval(() => {
//     firstName += 'a'
// }, 1000);


var Welcome = function (_React$Component) {
    _inherits(Welcome, _React$Component);

    function Welcome(props) {
        _classCallCheck(this, Welcome);

        var _this = _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call(this, props));

        _this.state = { lastName: 'pengfei', fullName: 'wangpengfei' };
        return _this;
    }

    _createClass(Welcome, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: 'tick',
        value: function tick() {
            //setState可能是异步执行的，因此在结合props和state中的值时，应该采用如下方式，第一个参数为先前state，第二个参数是当时的props
            //setState是合并的，因此改变state中的一个值，其他的值不变
            this.setState(function (prevState, props) {
                return {
                    fullName: props.firstName + prevState.lastName
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement('h1', null, 'welcome,', this.props.firstName, '-', this.state.lastName, '-', this.state.fullName);
        }
    }]);

    return Welcome;
}(React.Component);

ReactDOM.render(React.createElement(Welcome, { firstName: firstName }), document.getElementById('root'));
//# sourceMappingURL=index04.js.map
//# sourceMappingURL=index04.js.map