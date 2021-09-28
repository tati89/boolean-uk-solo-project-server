import { Express, Router } from "express";
import { getOrders, deleteOrder, updateOrder } from "./controller";

const router = Router();

router.get("/", getOrders);
router.patch("/:id", updateOrder);

router.delete("/:id", deleteOrder);

export default router;
