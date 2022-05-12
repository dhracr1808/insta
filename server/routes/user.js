import { Router } from "express";
const router = Router();
import { getUsers, createUser, getUser, profile } from "./../controllers";
import { changePassword, activeAcount, updatePassword } from "./../controllers";
import { authenticate, googleAuth, googleCallback } from "../controllers";
import { getPostsUser } from "./../controllers";
import { verifyToken } from "../config/token";
import { auth } from "./../config/auth";

const { isAuthenticated, isAdmin } = auth;

router.get("/", isAdmin, getUsers);
router.get("/:id", getUser);
router.get("/me", isAuthenticated, profile);
router.get("/active", verifyToken, activeAcount);
router.get("/me/posts", isAuthenticated, getPostsUser);
router.post("/", createUser);
router.post("/loggin", authenticate);
router.post("/reset", changePassword);

router.put("/reset", verifyToken, updatePassword);

router.get("/auth", (req, res) => {
  res.send('<a href="./auth/google">auth google</a>');
});

router.get("/auth/google", googleAuth);
router.get("/auth/google/callback", googleCallback);

export default router;
