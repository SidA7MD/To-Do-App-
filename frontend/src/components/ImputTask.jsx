import React, { useState } from "react";
import Taskscontairer from "./Taskscontairer";
import toast from "react-hot-toast";
import axios from "axios";

const InputTask = () => {
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content.trim()) {
      toast.error("You should write a task");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/Tasks", { task: content });
      toast.success("Task added Successfully!");
      setContent(""); // clear input
    } catch (error) {
      console.error("Error creating Task:", error);
      toast.error("Failed to create task");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left: Add task */}
      <div className="flex items-center justify-center bg-gray-100 p-8">
        <div className="w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Ajouter une tâche
          </h2>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Nouvelle tâche..."
              className="flex-1 input input-bordered rounded-xl focus:outline-none focus:ring-0"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" className="btn btn-primary rounded-xl">
              Ajouter
            </button>
          </form>
        </div>
      </div>

      {/* Right: Task list */}
      <Taskscontairer />
    </div>
  );
};

export default InputTask;
