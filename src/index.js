import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "40px",
  border: "5px solid blue",
  borderRadius: "10px",
  boxShadow: "10px 10px 8px #888888"
};

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
