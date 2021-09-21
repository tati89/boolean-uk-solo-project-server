import { Router } from "express";
import { addBasket, deleteBasket } from "./controller";

const router = Router();

router.post("/", addBasket);
router.delete("/:id", deleteBasket);

export default router;
