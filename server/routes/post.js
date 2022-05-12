import { Router } from "express";
import { getPost, getPosts, createPost, deletePost } from "./../controllers";
const router = Router();

import { auth } from "./../config/auth";

router.get("/", getPosts);
router.get("/:id", getPost);

router.delete("/:id", deletePost);

router.post("/", /* auth.isAuthenticated, */ createPost);
export default router;
