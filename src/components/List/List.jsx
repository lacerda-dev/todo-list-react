import { useState } from "react";
import { Task } from "../Task/Task";
import "./List.css";

export const List = ({
  tasks,
  completed,
  trash,
  editing,
  editValue,
  setEditValue,
  completeTask,
  recoverTask,
  editTask,
  deleteTask,
}) => {
  const [searchTask, setSearchTask] = useState("");
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(searchTask.toLowerCase()),
  );

  return (
    <div className="container-list">
      {trash ? (
        <div>
          <div className="container-search">
            <p className="count-tasks">{completed.length} task on the trash</p>
          </div>
        </div>
      ) : (
        <div>
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
                {filteredTasks.length} of {tasks.length} tasks found
              </p>
            )}
          </div>
        </div>
      )}

      {!trash
        ? filteredTasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              trash={trash}
              index={index}
              editing={editing}
              editValue={editValue}
              completeTask={completeTask}
              recoverTask={recoverTask}
              editTask={editTask}
              setEditValue={setEditValue}
              deleteTask={deleteTask}
            />
          ))
        : completed.map((task, index) => (
            <Task
              key={index}
              task={task}
              trash={trash}
              index={index}
              editing={editing}
              editValue={editValue}
              completeTask={completeTask}
              recoverTask={recoverTask}
              editTask={editTask}
              setEditValue={setEditValue}
              deleteTask={deleteTask}
            />
          ))}
    </div>
  );
};
