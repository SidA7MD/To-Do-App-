import React from "react";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
  return (
    <Link 
      to={`/tasks/${task._id}`}  // ✅ use frontend route, not /api
      className="block p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
    >
      <span>{task.task}</span>
    </Link>
  );
};

export default TaskCard;
