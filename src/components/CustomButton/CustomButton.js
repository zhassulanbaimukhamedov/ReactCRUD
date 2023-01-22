import React from "react";
import "./CustomButton.css";

const CustomButton = ({ type, className, label, handleClick }) => {
  return (
    <button type={type} className={className} onClick={handleClick}>
      {label}
    </button>
  );
};
export default CustomButton;
