import { Task } from "../Task/Task";
import "./List.css";

export const List = ({ tasks, deletTask }) => {
  return (
    <div className="container-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} index={index} deletTask={deletTask} />
      ))}
    </div>
  );
};
