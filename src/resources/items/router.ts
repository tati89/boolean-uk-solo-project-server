import { Router } from "express";
import { getAllMenu } from "./controller";

const router = Router();

router.get("/", getAllMenu);

export default router;
