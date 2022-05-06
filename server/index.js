import app from "./app";
import { PORT } from "./config/config";
import { User } from "./models/User";

User.sync({ force: false })
  .then(() => {
    app.listen(PORT, function () {
      console.log("db connected and server on port", PORT);
    });
  })
  .catch((err) => {
    console.log("upps  err");
  });
