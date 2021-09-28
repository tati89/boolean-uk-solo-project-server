import { Router } from "express";
import { addItem, deleteItem } from "./constroller";

const router = Router();

router.post("/", addItem);
router.delete("/:id", deleteItem);

export default router;
