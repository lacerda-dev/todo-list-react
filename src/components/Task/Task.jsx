import { Button } from "../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./Task.css"

export const Task = ({ task, index, deletTask }) => {
  return (
    <div className="container-task">
      <p>{task}</p>
      <Button content={<FontAwesomeIcon icon={faCheck} />} onClick={() => deletTask(index)} color="#FF01AF" />
    </div>
  );
};
