import React from "react";

const Button = ({ children, click, type = "button", variant }) => {
  return (
    <button onClick={click} type={type} className={variant}>
      {children}
    </button>
  );
};

export default Button;
