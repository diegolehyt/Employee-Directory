import React from "react";
import "./style.css";

const styles = {
  titleS : {
    fontFamily: "'Abel', sans-serif",
    fontWeight: 'bolder',
    color: 'gold',
    marginTop: '50px'
  }
}

function Title(props) {
  return <h1 className="title col-12" style={styles.titleS}>{props.children}</h1>;
}

export default Title;
