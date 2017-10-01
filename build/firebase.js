"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _firebase = require("firebase");

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "unreadablestuff",
    authDomain: "your-domain-name.firebaseapp.com",
    databaseURL: "https://your-domain-name.firebaseio.com",
    storageBucket: "your-domain-name.appspot.com",
    messagingSenderId: "123123123123"
};

var fire = _firebase2.default.initializeApp(config);

exports.default = fire;