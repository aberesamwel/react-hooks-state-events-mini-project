import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask ? ()  => onDeleteTask(task) : undefined}
        />
      ))}   
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;