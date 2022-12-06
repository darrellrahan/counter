import React from "react";

const Button = (prop) => (
  <button onClick={prop.onClick} style={prop.style}>
    {prop.text}
  </button>
);

export default Button;
