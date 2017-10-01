'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer = require('./components/Events/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reduxForm = require('redux-form');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    events: _reducer2.default,
    form: _reduxForm.reducer,
    routing: _reactRouterRedux.routerReducer
});

exports.default = rootReducer;