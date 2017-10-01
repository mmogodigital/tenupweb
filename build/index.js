'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _reactRouter = require('react-router');

var _Events = require('./components/Events/Events.jsx');

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        undefined.props.children,
        _react2.default.createElement(
            'h1',
            null,
            'Hello, World!!!'
        ),
        _react2.default.createElement(
            'h2',
            null,
            'This is React Fibre'
        ),
        _react2.default.createElement(_Events2.default, null)
    );
};

var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, _store2.default);

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: history },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/', component: App },
            _react2.default.createElement(_reactRouter.IndexRoute, { component: App }),
            _react2.default.createElement(_reactRouter.Route, { path: '/events/', component: _Events2.default })
        )
    )
), document.getElementById('app'));