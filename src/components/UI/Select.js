import React from "react";
import "./Select.css";

const Select = ({ options, label, ...others }) => {
  return (
    <>
      <label className="form-input-label">{label} </label>
      <select {...others} className="form-input-label">
        {options.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
