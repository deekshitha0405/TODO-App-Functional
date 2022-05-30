import React from "react";
import Button from "./Button";
import "./Task.css";

const Task = (props) => {
  const taskDelete = () => {
    props.onDelete(props.idValue);
  };

  const taskUpdate = () => {
    props.onUpdate(props.idValue);
  };

  return (
    <div className="taskPannel">
      <h3>{props.taskName}</h3>
      <Button
        onAddClick={props.didUpdated ? () => {} : taskUpdate}
        btnValue={props.didUpdated ? "Updated" : "Edit"}
        btnClass="btnEdit"
      />
      <Button onAddClick={taskDelete} btnValue="Delete" btnClass="btnDelete" />
    </div>
  );
};

export default Task;
