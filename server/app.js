import express from "express";
import path from "path";
const app = express();
import router from "./routes";

/*================ midlewares ===========================*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*================ Routes ===========================*/
app.use("/api", router);

/*================ Static ===========================*/

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

export default app;
