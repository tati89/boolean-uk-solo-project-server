import { Router } from "express";
import { getUsers, getUser, deleteUser } from "./controller";

const router = Router();

router.get("/", getUsers);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);

export default router;
