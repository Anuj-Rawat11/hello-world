// There are four ways to style React Components
// 1.Using CSS stylesheets
// We can also add multiple class names in the className property.One of the easiest ways to do so is using template literals
// We can also pass props from parent component and conditionally apply styling in child component
// 2.Using inline styles
// 3.Using CSS modules
// 4.Using CSS in JS modules

import React from "react";
import "./Style.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      {/* <h2 className="primary fontXL">Hello World</h2> */}
      <h2 className={`${className} fontXL`}>Hello World</h2>
    </div>
  );
}

export default Stylesheet;
