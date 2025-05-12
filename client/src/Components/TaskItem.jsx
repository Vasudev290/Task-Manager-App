import React from "react";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-2 border rounded mb-2">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onUpdate(task._id, { completed: !task.completed })}
        />
        <span className={task.completed ? "line-through ml-2" : "ml-2"}>
          {task.title}
        </span>
      </div>
      <button className="text-red-600" onClick={() => onDelete(task._id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
