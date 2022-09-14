import express from "express";
import { login, register, updateUser } from "../controllers/authControllers.js";

const authRouter = express.Router();

import authenticateUser from "../middleware/auth.js";
authRouter.route("/register").post(register);
authRouter.route("/login").post(login);
authRouter.route("/updateUser").patch(authenticateUser, updateUser);

export default authRouter;
