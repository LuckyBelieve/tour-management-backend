import express from "express";
import { Login, Register } from "../Controllers/authController.js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const Router = express.Router();

Router.post("/register", Register);
Router.post("/login", Login);

export default Router;
