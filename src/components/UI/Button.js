import React from "react";
import "./Button.css";

const Button = ({ children, ...others }) => {
  return (
    <button {...others} className="form-button">
      {children}
    </button>
  );
};

export default Button;
