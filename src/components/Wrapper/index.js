import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="container">{props.children}<br/><br/></div>;
}

export default Wrapper;
