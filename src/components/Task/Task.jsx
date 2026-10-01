import { Button } from "../Button/Button";

export const Task = ({ task, index, deletTask }) => {
  return (
    <div className="container-task">
      <p>{task}</p>
      <Button content={"Concluir"} onClick={() => deletTask(index)} />
    </div>
  );
};
