import { Router } from "express";
import * as authService from "../service/auth/export.js";
import joiMiddleware from "../helper/middlewares/joimiddleware.js";
import register from "../helper/schema/register.shema.js";
import login from "../helper/schema/login.shema.js";
const router = Router();
router.post("/register", joiMiddleware(login), authService.addUser);
router.post("/login", joiMiddleware(register), authService.userLogin);
export default router;
