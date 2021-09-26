import { Express, Router } from "express";
import { getUserByCookie } from "./controller";

const router = Router();

router.get("/", getUserByCookie);

export default router;
