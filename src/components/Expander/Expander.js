import React from "react";
import SvgIcon from "../SvgIcon/SvgIcon";

function Expander(props) {
  const toggleExpander = (e) => {
    e.target.closest(".expander").classList.toggle("expander--opened");
    const content = e.target.nextSibling;
    const height = content.scrollHeight;
    if (!content.style.height) {
      content.style.height = height + "px";
    } else {
      content.style.height = "";
    }
    console.log(Boolean(content.style.height));
  };

  return (
    <div className="expander">
      <p
        onClick={toggleExpander}
        className={"expander__button " + props.componentClass}
      >
        {props.innerContent}
        <SvgIcon name="expander-open" />
        <SvgIcon name="expander-close" />
      </p>
      <div className="expander__content">{props.text}</div>
    </div>
  );
}

export default Expander;
