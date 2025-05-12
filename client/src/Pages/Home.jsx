import React, { useEffect, useState } from "react";
import { fetchTasks, addTask, updateTasks, deleteTasks } from "../api";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

 const loadTasks = async () => {
  try {
    const { data } = await fetchTasks(filter);
    setTasks(data.tasks); 
  } catch (err) {
    console.error("Error loading tasks:", err);
    setTasks([]); 
  }
};

  useEffect(() => {
    loadTasks();
  });

  const handleAdd = async (task) => {
    await addTask(task);
    loadTasks();
  };

  const handleUpdate = async (id, data) => {
    await updateTasks(id, data);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTasks(id);
    loadTasks();
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager App</h1>
      <div className="flex gap-2 mb-4">
        {["all", "completed", "pending"].map((f) => (
          <button
            key={f}
            className={`px-3 py-1 rounded ${
              filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
