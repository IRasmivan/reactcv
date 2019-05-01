import React from "react";
import style from "./ContentDiv.module.scss";
export default props => {
  let title = null;
  if (props.title) {
    title = <h1>{props.title}</h1>;
  }
  return (
    <div className={style.content} style={props.styles}>
      {title}
      {props.children}
    </div>
  );
};
