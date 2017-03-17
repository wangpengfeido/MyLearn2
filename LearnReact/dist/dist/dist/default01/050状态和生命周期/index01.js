'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * Created by w1036_000 on 2017/3/10.
 */

//属性改为this.props
var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock() {
        _classCallCheck(this, Clock);

        return _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).apply(this, arguments));
    }

    _createClass(Clock, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', null, React.createElement('h1', null, 'hello world'), React.createElement('h1', null, "\u5F53\u524D\u65F6\u95F4\uFF1A", this.props.date.toLocaleTimeString()));
        }
    }]);

    return Clock;
}(React.Component);

ReactDOM.render(React.createElement(Clock, { date: new Date() }), document.getElementById('root'));
//# sourceMappingURL=index01.js.map
//# sourceMappingURL=index01.js.map
//# sourceMappingURL=index01.js.map