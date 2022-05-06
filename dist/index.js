"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _config = require("./config/config");

var _User = require("./models/User");

_User.User.sync({
  force: false
}).then(function () {
  _app["default"].listen(_config.PORT, function () {
    console.log("db connected and server on port", _config.PORT);
  });
})["catch"](function (err) {
  console.log("upps  err");
});