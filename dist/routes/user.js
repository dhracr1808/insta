"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controllers = require("./../controllers");

var router = (0, _express.Router)();
router.get("/", _controllers.getUsers);
router.get("/:id", _controllers.getUser);
router.post("/", _controllers.createUser);
var _default = router;
exports["default"] = _default;