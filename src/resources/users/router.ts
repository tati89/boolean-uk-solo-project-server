import { Router } from "express";
import { getUser, deleteUser, updateUser } from "./controller";

const router = Router();

router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.patch("/:id", updateUser);

export default router;
