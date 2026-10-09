import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPencil } from "@fortawesome/free-solid-svg-icons";

import "./Task.css";

export const Task = ({
  task,
  index,
  editing,
  editValue,
  setEditValue,
  completeTask,
  editTask,
}) => {
  return (
    <div className="container-task">
      <div className="task-content">
        {editing === index ? (
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="edit-input"
          />
        ) : (
          <p>{task}</p>
        )}
      </div>
      {editing === index ? (
        <Button
          content={<FontAwesomeIcon icon={faCheck} />}
          onClick={() => editTask(index)}
          color="#858c8e"
        />
      ) : (
        <div className="container-btn">
          <Button
            content={<FontAwesomeIcon icon={faPencil} />}
            onClick={() => editTask(index)}
            color="#858c8e"
          />
          <Button
            content={<FontAwesomeIcon icon={faCheck} />}
            onClick={() => completeTask(index)}
            color="#FF01AF"
          />
        </div>
      )}
      
    </div>
  );
};
