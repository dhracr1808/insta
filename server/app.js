import express from "express";
const app = express();
import router from "./routes";

/*================ midlewares ===========================*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*================ Routes ===========================*/
app.use("/api", router);

export default app;
