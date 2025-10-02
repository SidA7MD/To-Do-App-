import express from "express";
import { AddTask, DeleteTask, GetAllTaskes, UpdateTask , GetTask, Taskfinished} from "../controllers/Task.controller.js";

const router = express.Router();
router.get('/' , GetAllTaskes);
router.get('/:id', GetTask);
router.post('/' , AddTask);
router.put('/:id' , UpdateTask);
router.put('/:id',Taskfinished)
router.delete('/:id' , DeleteTask);

export default router