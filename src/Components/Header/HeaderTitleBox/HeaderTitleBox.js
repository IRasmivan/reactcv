import React from "react";
export default props => {
  let additionalHtml;
  console.log(props.gitlink);
  if (props.gitlink !== undefined) {
    additionalHtml = (
      <h4>
        <a href={props.gitlink}>
          <i class="fa fa-github" /> {props.gitlinkText}
        </a>
        <a href={props.inlink}>
          <i class="fa fa-linkedin-square" /> {props.inlinkText}
        </a>
        <a href={props.fblink}>
          <i class="fa fa-facebook-square" /> {props.fblinkText}
        </a>
      </h4>
    );
  }

  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      {additionalHtml}
    </div>
  );
};
