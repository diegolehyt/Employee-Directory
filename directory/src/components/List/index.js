import React from "react";
import "./style.css";

function List(props) {
  return <table className='col-12'>{props.children}</table>;
}

export default List;
