import S from "sequelize";
import { db as sequelize } from "./../db";
import bcrypt from "bcrypt";

export class User extends S.Model {}

User.init(
  {
    email: {
      type: S.STRING,
      allowNull: false,
      validate: { isEmail: true },
      unique: true,
    },
    image: { type: S.JSON },
    active: { type: S.BOOLEAN, defaultValue: false },
    admin: { type: S.BOOLEAN, defaultValue: false },
    password: { type: S.STRING, allowNull: false },
    salt: { type: S.STRING },
  },
  { sequelize, modelName: "user" }
);

User.addHook("beforeCreate", async (user) => {
  const salt = await bcrypt.genSalt(2);
  user.salt = salt;
  const hash = await user.hash(user.password, salt);
  user.password = hash;
});

User.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};

User.prototype.changePassword = async function (password) {
  const salt = await bcrypt.genSalt(2);
  this.salt = salt;
  const hash = await this.hash(password, salt);
  this.password = hash;
  await this.update(
    { password: this.password, salt: this.salt },
    { where: { id: this.email } }
  );
};
