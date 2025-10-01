import Task from "../models/Task.model.js";


export const GetAllTaskes =  async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save task" });
  }
}

export const AddTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save task" });
  }
}

export const UpdateTask =  async (req, res) => {
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
}

export const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json("Task deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to Update task" });
  }
}
