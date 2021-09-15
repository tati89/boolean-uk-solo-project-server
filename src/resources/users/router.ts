import { Router } from "express";
import { getUsers, addUser } from "./controller";

const router = Router();

router.get("/", getUsers);
router.post("/users", addUser);

export default router;
