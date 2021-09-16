import { Router } from "express";
// import { createUser } from "../users/controller";
import { login, logout, validateLoggedInToken } from "./controller";

const router = Router();

// login

router.route("/login").post(login);

router.route("/logout").get(logout);

// router.route("/signup").post(createUser);

router.route("/validate-token").get(validateLoggedInToken);

export default router;
