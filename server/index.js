import app from "./app";
import { PORT } from "./config/config";
import { db } from "./db";

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, function () {
      console.log("db connected and server on port", PORT);
    });
  })
  .catch((err) => {
    console.log("upps  err");
  });
