import React from "react";
import "./TextArea.css";

const TextArea = ({ label, ...others }) => {
  return (
    <>
      <label className="form-input-label">{label}</label>
      <textarea className="form-input-textarea" {...others} />
    </>
  );
};

export default TextArea;
