import express from "express";
import { AddTask, DeleteTask, GetAllTaskes, UpdateTask } from "../controllers/Task.controller.js";

const router = express.Router();
router.get('/' , GetAllTaskes);
router.post('/' , AddTask);
router.put('/:id' , UpdateTask);
router.delete('/:id' , DeleteTask);

export default router