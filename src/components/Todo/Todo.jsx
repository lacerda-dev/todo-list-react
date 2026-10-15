import { useState } from "react";
import { List } from "../List/List";
import "./Todo.css";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("@tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [completed, setCompleted] = useState(() => {
    const savedTasks = localStorage.getItem("@completed");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editing, setEditing] = useState(null);
  const [trash, setTrash] = useState(false);

  useEffect(() => {
    localStorage.setItem("@tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("@completed", JSON.stringify(completed));
  }, [completed]);

  function trashOn() {
    setTrash(!trash);
  }

  function createTask(e) {
    e.preventDefault();

    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
      toast.success("New task added");
    }
  }

  function completeTask(index) {
    setCompleted([...completed, tasks[index]]);
    setTasks(tasks.filter((task, i) => i !== index));
    toast.success("Moved to trash");
  }

  function deleteTask(index) {
    setCompleted(completed.filter((task, i) => i !== index));
    toast.success("Task deleted");
  }

  function recoverTask(index) {
    setTasks([...tasks, completed[index]]);
    setCompleted(completed.filter((task, i) => i !== index));
    toast.info("Recovered task");
  }

  function editTask(index) {
    if (editing === index) {
      setTasks((prev) =>
        prev.map((task, i) => (i === index ? editValue : task)),
      );
      setEditing(null);
      setEditValue("");
      toast.info("Edited task");
    } else {
      setEditing(index);
      setEditValue(tasks[index]);
    }
  }

  return (
    <div className="container-todo">
      <nav className="navigation">
        {trash ? (
          <button onClick={trashOn} className="menu">
            {<FontAwesomeIcon icon={faHouse} />}
          </button>
        ) : (
          <button onClick={trashOn} className="menu">
            {<FontAwesomeIcon icon={faTrashCan} />}
          </button>
        )}
      </nav>
      {!trash ? (
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
      ) : (
        ""
      )}

      <List
        tasks={tasks}
        completed={completed}
        trash={trash}
        editing={editing}
        completeTask={completeTask}
        recoverTask={recoverTask}
        editTask={editTask}
        editValue={editValue}
        setEditValue={setEditValue}
        deleteTask={deleteTask}
      />
    </div>
  );
};
