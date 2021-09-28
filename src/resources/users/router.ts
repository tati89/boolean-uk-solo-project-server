import { Router } from "express";
import { getUser, deleteUser } from "./controller";

const router = Router();

router.delete("/:id", deleteUser);
router.get("/:id", getUser);

export default router;
