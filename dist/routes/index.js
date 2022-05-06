"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("./user"));

var router = (0, _express.Router)();
/* ================ Routes ==================== */

router.use("/users", _user["default"]);
router.get("/*", function (req, res) {
  res.json({
    message: "ruta no encontrada"
  });
});
var _default = router;
exports["default"] = _default;