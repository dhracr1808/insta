"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _config = require("../config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = new _sequelize["default"](_config.DBNAME, _config.DBUSERNAME, _config.DBPASSWORD, {
  host: "remotemysql.com",
  dialect: "mysql",
  logging: false
});
exports.db = db;