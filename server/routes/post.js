import { Router } from "express";
import { getPost, getPosts, createPost } from "./../controllers";
const router = Router();

router.get("/", getPosts);
router.get("/:id", getPost);

router.post("/", createPost);
export default router;
