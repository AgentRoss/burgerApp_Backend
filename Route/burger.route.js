import express from "express";
import { getBurger } from "../controller/burger.controller.js";

const router = express.Router();

router.get("/", getBurger);

export default router;