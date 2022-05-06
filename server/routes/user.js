import { Router } from "express";
const router = Router();
import { getUsers, createUser, getUser } from "./../controllers";

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);

export default router;
