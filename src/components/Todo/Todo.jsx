import { useState } from "react";
import { List } from "../List/List";
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function createTask(e) {
    e.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function deletTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
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
            <FontAwesomeIcon icon={faPencil} className="icon"/>
          </button>
        </form>
      </div>
      {tasks.length > 0 && <List tasks={tasks} deletTask={deletTask} />}
    </div>
  );
};
