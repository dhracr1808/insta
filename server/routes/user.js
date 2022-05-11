import { Router } from "express";
const router = Router();
import { getUsers, createUser, getUser, profile } from "./../controllers";
import { changePassword, activeAcount, updatePassword } from "./../controllers";
import { authenticate } from "../controllers";

import { verifyToken } from "../config/token";
import { auth } from "./../config/auth";

router.get("/", getUsers);
router.get("/:id", getUser);
router.get("/me", auth.isAuthenticated, profile);
router.get("/active", verifyToken, activeAcount);

router.post("/", createUser);
router.post("/loggin", authenticate);
router.post("/reset", changePassword);

router.get("/reset", verifyToken, (req, res) => {
  res.send(req.user);
});

router.put("/reset", verifyToken, updatePassword);

export default router;
