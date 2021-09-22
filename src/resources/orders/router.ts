import { Express, Router } from "express";
import { createOrder, getOrders, deleteOrder } from "./controller";

const router = Router();

router.post("/:user_ID", createOrder);
router.get("/", getOrders);
router.delete("/:id", deleteOrder);

export default router;
