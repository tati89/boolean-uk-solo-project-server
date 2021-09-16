import { Router } from "express";
import { addUser } from "../users/controller";
import { login, logout, validateLoggedInToken } from "./controller";

const router = Router();

// login

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/signup").post(addUser);

router.route("/validate-token").get(validateLoggedInToken);

export default router;
