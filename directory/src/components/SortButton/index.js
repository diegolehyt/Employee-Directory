import React from "react";
import "./style.css";

function SortButton (props) {
  return (
    <div className="btn-primary">
      <span onClick={() => props.sortByName()}>
        SORT BY NAME
      </span>
    </div>
  );
}

export default SortButton;
