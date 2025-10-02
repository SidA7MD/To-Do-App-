import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../lib/utils";
import { Trash2Icon, PenBoxIcon } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const TaskCard = ({ task, setTask }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete!")) return;

    try {
      await axios.delete(`http://localhost:5000/api/Tasks/${id}`);
      setTask((prev) => prev.filter((task) => task._id !== id));
      toast.success("task deleted successfully");
    } catch (error) {
      console.log("Error in hadledelete", error);
      toast.error("Failed to Delete");
    }
  };

  return (
    <Link
      to={`/tasks/${task._id}`}
      className="block p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
    >
      <li className="relative p-3 bg-white rounded-lg shadow-sm flex items-center">
        <span className="flex-1">{task.task}</span>
        <div className="relative flex items-center">
          {/* Task / edit icon */}
          <div className="flex items-center gap-2 flex-1">
            <PenBoxIcon className="w-4 h-4 text-blue-500" />
          </div>

          {/* Delete button fixed to the right */}
          <button
            className="p-1 btn btn-ghost btn-xs text-error"
            onClick={(e) => handleDelete(e, task._id)}
          >
            <Trash2Icon className="w-4 h-4" />
          </button>
        </div>
      </li>

      <br />
      <span className="text-sm text-green-500/60">
        {formatDate(new Date(task.createdAt))}
      </span>
    </Link>
  );
};

export default TaskCard;
