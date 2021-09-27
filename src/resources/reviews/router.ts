import { Express, Router } from "express";
import { getReviews, addReview } from "./controller";

const router = Router();

router.get("/", getReviews);
router.post("/", addReview);

export default router;
