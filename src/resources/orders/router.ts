import { Express, Router } from "express";
import {
  createOrder,
  getOrders,
  deleteOrder,
  getOrdersById,
} from "./controller";

const router = Router();

router.post("/:user_ID", createOrder);
router.get("/", getOrders);
router.get("/:user_ID", getOrdersById);
router.delete("/:id", deleteOrder);

export default router;
