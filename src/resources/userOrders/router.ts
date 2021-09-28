import { Express, Router } from "express";
import { createOrder, getOrdersById } from "./controller";

const router = Router();

router.post("/:user_ID", createOrder);
router.get("/:user_ID", getOrdersById);

export default router;
