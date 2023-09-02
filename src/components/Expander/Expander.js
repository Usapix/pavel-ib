import React from "react";

function Expander(props) {
  return (
    <button className={"expander " + props.componentClass}>
      {props.innerContent}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M1 1H15M15 1V15M15 1L1 15" stroke="#414141" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export default Expander;