import { Router } from "express";
const router = Router();

/* ================ Routes ==================== */
import routerUser from "./user";
import routerPost from "./post";
router.use("/users", routerUser);
router.use("/posts", routerPost);

router.get("/*", (req, res) => {
  res.json({ message: "ruta no encontrada" });
});

export default router;
