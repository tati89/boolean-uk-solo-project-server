import { Router } from "express";
import { getUserBasket, addBasket, deleteBasket } from "./controller";

const router = Router();

router.get("/:id", getUserBasket);
router.post("/", addBasket);
router.delete("/:id", deleteBasket);

export default router;
