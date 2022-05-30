import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div>
      <input
        type="text"
        className={props.className}
        value={props.fieldVal}
        onChange={(e) => props.onFieldChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
