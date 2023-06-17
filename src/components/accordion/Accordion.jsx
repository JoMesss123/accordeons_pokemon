import React from "react";
import "./Accordion.css";

const Accordion = (props) => {
  const classnames = ["accordion"];

  if (props.value === props.active) {
    classnames.push("active");
  }

  const onMouseOver = () => {
    props.onMouseOver(props.value);
  };

  return (
    <div onMouseOver={onMouseOver} className={classnames.join(" ")}>
      <div onMouseOver={onMouseOver} className="accordion__button">
        {props.title}
      </div>
      <div className="accordion__content">{props.children}</div>
    </div>
  );
};

export default Accordion;
