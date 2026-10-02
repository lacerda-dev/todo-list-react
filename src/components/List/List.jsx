import { useState } from "react";
import { Task } from "../Task/Task";
import "./List.css";

export const List = ({ tasks, deletTask }) => {
  const [searchTask, setSearchTask] = useState("");
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchTask.toLowerCase()),
  );

  return (
    <div className="container-list">
      <div className="divider"></div>
      <div className="container-search">
        <input
          type="text"
          className="input-search"
          placeholder="Searche a task..."
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
        />
        {filteredTasks.length === tasks.length ? (
          <p className="count-tasks">{tasks.length} tasks</p>
        ) : (
          <p className="count-tasks">
            {filteredTasks.length} of {tasks.length} tasks
          </p>
        )}
      </div>
      {filteredTasks.map((task, index) => (
        <Task key={index} task={task} index={index} deletTask={deletTask} />
      ))}
      {filteredTasks.length > 0 ? (
        ""
      ) : (
        <p className="error-search">* No tasks found</p>
      )}
    </div>
  );
};
