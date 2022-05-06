import express from "express";
const app = express();
import { PORT } from "./config/config";

app.get("/", function (req, res) {
  res.send("hola mundo");
});
app.listen(PORT, function () {
  console.log("server on port", PORT);
});
