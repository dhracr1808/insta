import { User } from "./User";
import { Post } from "./Post";

User.hasMany(Post, { as: "post", foreignKey: "userId" });
Post.belongsTo(User, { as: "user", foreignKey: "userId" });

export { User, Post };
