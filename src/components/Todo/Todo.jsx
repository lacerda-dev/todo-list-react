import { useState } from "react";
import { List } from "../List/List";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("@tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    localStorage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  function createTask(e) {
    e.preventDefault();

    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  }

  function completeTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  function editTask(index) {
    if (editing === index) {
      setTasks((prev) =>
        prev.map((task, i) => (i === index ? editValue : task)),
      );
      setEditing(null);
      setEditValue("");
    } else {
      setEditing(index);
      setEditValue(tasks[index]);
    }
  }

  return (
    <div className="container-todo">
      <div className="container-new-task">
        <form onSubmit={createTask} className="form-new-task">
          <input
            className="input-task"
            type="text"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="New task..."
          />
          <button type="submit" className="btn-new-task">
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button>
        </form>
      </div>
      {tasks.length > 0 && (
        <List
          tasks={tasks}
          editing={editing}
          completeTask={completeTask}
          editTask={editTask}
          editValue={editValue}
          setEditValue={setEditValue}
        />
      )}
    </div>
  );
};
