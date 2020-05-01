import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="team-heading">{props.children}</h1>;
}

export default Title;
