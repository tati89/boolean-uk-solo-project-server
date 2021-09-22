import { Router } from "express";
import {
  getUserBasket,
  getBasket,
  addBasket,
  deleteBasket,
} from "./controller";

const router = Router();

router.get("/:user_ID", getBasket);
router.post("/:user_ID", getUserBasket);
router.post("/", addBasket);
router.delete("/:id", deleteBasket);

export default router;
