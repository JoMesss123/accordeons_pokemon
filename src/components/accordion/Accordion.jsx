import React from "react";
import "./Accordion.css";

const Accordion = (props) => {
  const classnames = ["accordion"];

  if (props.value === props.active) {
    classnames.push("active");
  }

  const onMouseEnter = () => {
    props.onMouseEnter(props.value);
  };

  return (
    <div onMouseEnter={onMouseEnter} className={classnames.join(" ")}>
      <div onMouseEnter={onMouseEnter} className="accordion__button">
        {props.title}
      </div>
      <div className="accordion__content">{props.children}</div>
    </div>
  );
};

export default Accordion;
