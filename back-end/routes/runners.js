import express  from "express";
import { addNewRunner } from "../controller/runner.js";

const router = express.Router();


router.post('/', addNewRunner);


export default router;