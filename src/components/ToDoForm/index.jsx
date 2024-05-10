import React, { useState } from "react";
import PropTypes from "prop-types";

ToDoForm.propTypes = {
  
  onSubmit: PropTypes.func,
};


ToDoForm.defaultProps = {
  onSubmit: null,
};


function ToDoForm(props) {

  const { onSubmit } = props;
  const [value, setValue] = useState("");


  function handleChange(event) {
    // console.log(event.target.value);
    setValue(event.target.value);
  }


  function handleSubmit(event) {

    event.preventDefault();

    if (!onSubmit) {
      return;
    }

    const formValue = {
      title: value,
    };

    onSubmit(formValue);

    setValue("");
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange}/>
    </form>
  );
}

export default ToDoForm;
