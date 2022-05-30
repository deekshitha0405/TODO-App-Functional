import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Components/Form";
import "./Update.css";

const Update = () => {
  const navigate = useNavigate();
  const [todoAppData, setTodoAppData] = useState(
    JSON.parse(window.localStorage.getItem("todoList"))
  );

  const inputHandler = (val) => {
    setTodoAppData((prevState) => {
      return { ...prevState, inputTask: val };//Refactor the code as updated in home.js
      
    });
  };

  const updateHandler = () => {
    const taskId = todoAppData.updateId;
    const updateTaskName = todoAppData.inputTask;
    if (updateTaskName.trim() !== "") {
      todoAppData.tasks.filter((task) => task.id == taskId)[0]["title"] =
        updateTaskName.trim();
      todoAppData.tasks.filter((task) => task.id == taskId)[0][
        "isUpdated"
      ] = true;
      const updatedTodoData = {
        tasks: todoAppData.tasks,
        inputTask: "",
        idVal: todoAppData.idVal,
        updation: false,
        updateId: 0,
      };
      setTodoAppData(updatedTodoData);
      window.localStorage.setItem("todoList", JSON.stringify(updatedTodoData));
      navigate("/");
    } else {
      alert("Please provide valid task name");
    }
  };

  const updateTodo = {
    onFieldChange: inputHandler,
    className: "updateInput",
    onAddClick: updateHandler,
    btnValue: "Update",
    btnClass: "taskUpdateBtn",
    formClsName: "",
  };

  return (
    <div>
      <h1 className="updateHeading">Update Task</h1>
      <div className="inputArea">
        <Form formData={updateTodo} fieldVal={todoAppData.inputTask} />
      </div>
    </div>
  );
};

export default Update;
