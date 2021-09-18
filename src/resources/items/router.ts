import { Router } from "express";
import { getAllMenu, addItem, deleteItem } from "./controller";

const router = Router();

router.get("/", getAllMenu);
router.post("/", addItem);
router.delete("/", deleteItem);

export default router;