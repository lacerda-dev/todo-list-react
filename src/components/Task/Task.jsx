import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPencil,
  faTrashCan,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./Task.css";

export const Task = ({
  task,
  completed,
  trash,
  index,
  editing,
  editValue,
  setEditValue,
  completeTask,
  recoverTask,
  editTask,
  deleteTask,
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
      {!trash ? (
        editing === index ? (
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
        )
      ) : (
        <div className="container-btn">
          <Button
            content={<FontAwesomeIcon icon={faRotateLeft} />}
            onClick={() => recoverTask(index)}
            color="#858c8e"
          />
          <Button
            content={<FontAwesomeIcon icon={faTrashCan} />}
            onClick={() => deleteTask(index)}
            color="#FF01AF"
          />
        </div>
      )}
    </div>
  );
};
