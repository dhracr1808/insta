import S from "sequelize";
import { db as sequelize } from "./../db";

export class Post extends S.Model {}

Post.init(
  {
    title: {
      type: S.STRING,
    },
    description: { type: S.TEXT },
    image: { type: S.JSON },
    truncatedesc: {
      type: S.VIRTUAL,
      get() {
        return this.description.slice(0, 30) + "...";
      },
    },
  },
  { sequelize, modelName: "post" }
);
