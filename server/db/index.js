import Sequelize from "sequelize";
import { DBNAME, DBUSERNAME, DBPASSWORD } from "../config/config";

export const db = new Sequelize(DBNAME, DBUSERNAME, DBPASSWORD, {
  host: "remotemysql.com",
  dialect: "mysql",
  logging: false,
});
