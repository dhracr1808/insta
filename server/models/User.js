import S from "sequelize";
import { db as sequelize } from "./../db";
export class User extends S.Model {}

User.init(
  {
    email: { type: S.STRING },
    password: { type: S.STRING },
    salt: { type: S.STRING },
  },
  { sequelize, modelName: "user" }
);
