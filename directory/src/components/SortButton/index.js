import React from "react";
import "./style.css";

function SortButton (props) {
  return (
    <div className="btn-primary col-6">
      <span onClick={() => props.sortByName()}>
        SORT BY NAME
      </span>
    </div>
  );
}

export default SortButton;
