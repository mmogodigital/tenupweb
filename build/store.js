'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _redux = require('redux');

var _rootReducer = require('./rootReducer');

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = (0, _reduxDevtoolsExtension.composeWithDevTools)({});

var store = (0, _redux.createStore)(_rootReducer2.default, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)())
// other store enhancers if any
));

exports.default = store;