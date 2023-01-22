import React from "react";
import "./CustomInput.css";

const CustomInput = ({ placeholder, handleChange, value, field }) => {
  return <input placeholder={placeholder} onChange={(e) => handleChange(e, field)} value={value} />;
};
export default CustomInput;
