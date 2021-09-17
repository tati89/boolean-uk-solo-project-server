import { Router } from "express";
import { login, logout, validateLoggedInToken, signUp } from "./controller";

const router = Router();

// login

router.route("/login").post(login);

router.route("/logout").get(logout);

router.route("/signup").post(signUp);

router.route("/validate-token").get(validateLoggedInToken);

export default router;
