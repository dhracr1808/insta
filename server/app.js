import express from "express";
import path from "path";
import cokieParser from "cookie-parser";
import sesion from "express-session";
import passport from "passport";
import "./config/passport";

import fileUpload from "express-fileupload";
import { uploadFiles } from "./config";
const app = express();
import router from "./routes";

/*================ midlewares ===========================*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cokieParser());
app.use(sesion({ secret: "instapp", saveUninitialized: true, resave: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(fileUpload(uploadFiles));

/*================ Routes ===========================*/
app.use("/api", router);

/*================ Static ===========================*/

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

export default app;
