import React from "react";
import "./style.css";

const styles = {
  titleS : {
    fontFamily: "'Anton', sans-serif",
    color: 'gold'
  }
}

function Title(props) {
  return <h1 className="title col-12" style={styles.titleS}>{props.children}</h1>;
}

export default Title;
