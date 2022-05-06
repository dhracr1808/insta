"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = exports.DBUSERNAME = exports.DBPASSWORD = exports.DBNAME = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var PORT = process.env.PORT || 4001;
exports.PORT = PORT;
var DBNAME = process.env.DBNAME;
exports.DBNAME = DBNAME;
var DBUSERNAME = process.env.DBUSERNAME;
exports.DBUSERNAME = DBUSERNAME;
var DBPASSWORD = process.env.DBPASSWORD;
exports.DBPASSWORD = DBPASSWORD;