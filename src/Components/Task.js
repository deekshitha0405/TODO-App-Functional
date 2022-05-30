import React from "react";
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
      <AddButton
        onAddClick={props.didUpdated ? () => {} : taskUpdate}
        btnValue={props.didUpdated ? "Updated" : "Edit"}
        btnClass="btnEdit"
      />
      <AddButton
        onAddClick={taskDelete}
        btnValue="Delete"
        btnClass="btnDelete"
      />
    </div>
  );
};

export default Task;
