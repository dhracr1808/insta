import { Router } from "express";
const router = Router();

/* ================ Routes ==================== */
import routerUser from "./user";

router.use("/users", routerUser);

router.get("/*", (req, res) => {
  res.json({ message: "ruta no encontrada" });
});

export default router;
