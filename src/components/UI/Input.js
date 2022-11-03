import React from "react";
import './Input.css'

const Input = ({label,...other}) => {
  return (
    <>
      <label className="form-input-label">{label}</label>
      <input
        {...other}
        className="form-input"
      />
    </>
  );
};

export default Input;
