import React from "react";
import "./Button.css";

const Button = (props) => {//destructure the props
  return (
    <div>
      <button className={props.btnClass} onClick={props.onAddClick}>
        {props.btnValue}
      </button>
    </div>
  );
};

export default Button;
