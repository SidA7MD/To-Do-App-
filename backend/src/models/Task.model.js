import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    finished:{
      type:Boolean,
      default:false
    }
  },

  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task",TaskSchema);
export default Task;
