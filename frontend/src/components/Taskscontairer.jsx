import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import TaskCard from "./Taskcard";
const Taskcard = () => {
  const [Tasks, setTask] = useState([]);

  useEffect(() => {
    const getTaskes = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/Tasks");
        console.log(res.data);
        setTask(res.data);
      } catch (error) {
        console.log("Error feching Taskes");
        console.log(error.response);
        toast.error("Failed to load notes");
      }
    };
    getTaskes();
  }, []);

  return (
    <div className="bg-white p-8 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Liste des tâches
      </h2>
      <div className="space-y-3">
        {Tasks.length > 0 ? (
          Tasks.map((task) => (
            <TaskCard key={task._id} task={task} />  
          ))
        ) : (
          <p className="text-gray-500">Aucune tâche trouvée.</p>
        )}
      </div>
    </div>
  );
};

export default Taskcard;
