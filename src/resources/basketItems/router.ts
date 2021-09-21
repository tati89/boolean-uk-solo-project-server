import { Router } from "express";

import {
  getItems,
  addItemOrIncreaseQty,
  deleteItem,
  updateItemQty,
} from "./controller";

const router = Router();

router.get("/", getItems);
router.post("/", addItemOrIncreaseQty);
router.patch("/:id", updateItemQty);
router.delete("/:id", deleteItem);

export default router;
