import { Router } from "express";
import { getPost, getPosts, createPost, deletePost } from "./../controllers";
const router = Router();
import { auth } from "./../config/auth";
const { isAdmin, isAuthenticated } = auth



router.get("/", getPosts);
router.get("/:id", getPost);

router.delete("/:id", isAdmin, deletePost);

router.post("/",  isAuthenticated,  createPost);
export default router; 
