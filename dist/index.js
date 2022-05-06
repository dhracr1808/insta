"use strict";

var _express = _interopRequireDefault(require("express"));

var _config = require("./config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.send("hola mundo");
});
app.listen(_config.PORT, function () {
  console.log("server on port", _config.PORT);
});