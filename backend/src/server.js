import express from "express";
import dotenv from "dotenv";

import { conn } from "../src/config/db.js";
import Task from "./models/Task.model.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save task" });
  }
});

app.post("/api/Tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save task" });
  }
});

app.put("/api/Tasks/:id", async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task Updated Successfully",
      task: updatedTask,
    });
  } catch {
    console.error(error);
    res.status(500).json({ message: "Failed to Update task" });
  }
});

app.delete("/api/Tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json("Task deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to Update task" });
  }
});

conn().then(() => {
  app.listen(5000, () => {
    console.log("App Runing on port 5000");
  });
});
