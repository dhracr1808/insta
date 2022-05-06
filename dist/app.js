"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var app = (0, _express["default"])();

/*================ midlewares ===========================*/
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
/*================ Routes ===========================*/

app.use("/api", _routes["default"]);
var _default = app;
exports["default"] = _default;