"use strict";

var _app = _interopRequireDefault(require("./app"));

var _config = require("./config/config");

var _User = require("./models/User");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_User.User.sync({
  force: false
}).then(function () {
  _app["default"].listen(_config.PORT, function () {
    console.log("db connected and server on port", _config.PORT);
  });
})["catch"](function (err) {
  console.log("upps  err");
});