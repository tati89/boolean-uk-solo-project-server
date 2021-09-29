import { Router } from "express";
import { addItem, deleteItem, updateItem } from "./constroller";

const router = Router();

router.post("/", addItem);
router.delete("/:id", deleteItem);
router.patch("/:id", updateItem);

export default router;
