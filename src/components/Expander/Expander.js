import React from "react";

function Expander(props) {
  return (
    <div className="expander">
      <input className="expander__checkbox visually-hidden" type="checkbox" id={'expanderInput' + props.id} />
      <label 
        className={"expander__button " + props.componentClass}
        htmlFor={'expanderInput' + props.id}
      >
        {props.innerContent}
        <svg className="expander__svg expander__svg--closed" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 1H15M15 1V15M15 1L1 15" stroke="#414141" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="expander__svg expander__svg--opened" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 25L1 1M1 25L25 1" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </label>
      <div className="expander__content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima aliquid rerum omnis quo earum distinctio inventore reprehenderit perspiciatis, tempora odit excepturi? Corrupti, inventore ipsum consequuntur molestiae iure sunt nobis voluptates.
      </div>
    </div>
  )
}

export default Expander;