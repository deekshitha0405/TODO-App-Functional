import React from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Form = (props) => {
  return (
    <div>
      <Input
        onFieldChange={props.formData.onFieldChange}
        fieldVal={props.fieldVal}
        className={props.formData.className}
      />
      <Button
        onAddClick={props.formData.onAddClick}
        btnValue={props.formData.btnValue}
        btnClass={props.formData.btnClass}
      />
    </div>
  );
};

export default Form;
