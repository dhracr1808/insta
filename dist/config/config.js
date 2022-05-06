"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PORT = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var PORT = process.env.PORT || 4001;
exports.PORT = PORT;