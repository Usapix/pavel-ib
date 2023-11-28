import React from "react";

function Expander(props) {
  const toggleExpander = (e) => {
    e.target.closest('.expander').classList.toggle('expander--opened')
    const content = e.target.nextSibling
    const height = content.scrollHeight
    if(!content.style.height)  { 
      content.style.height = height + 'px'
    } else {
      content.style.height = ''
    }
    console.log(Boolean(content.style.height))
  }

  return (
    <div className="expander">
      <p 
        onClick={toggleExpander}
        className={"expander__button " + props.componentClass}
      >
        {props.innerContent}
        <svg className="expander__svg expander__svg--closed" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 1H15M15 1V15M15 1L1 15" stroke="#414141" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="expander__svg expander__svg--opened" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 25L1 1M1 25L25 1" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </p>
      <div className="expander__content">
        {props.text}
      </div>
    </div>
  )
}

export default Expander;