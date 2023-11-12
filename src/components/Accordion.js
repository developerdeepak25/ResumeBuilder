import React, {  useRef, useState } from "react";
import DownArrow from "../vectors/DownArrow";
import "./accordian.scss";
import Delete from "../vectors/Delete";

const Accordion = ({ title, children, variant, onDeleteFunc, state }) => {
  const [collapse, setCollapse] = useState(false);
  // const [height, setHeight] = useState();

  const accordionBodyRef = useRef(null);

  // const getMaxHeight = () => {
  //   if (accordionBodyRef.current ) {
        // return collapse ? "0" : `${accordionBodyRef.current.scrollHeight}px`;
  //  }

  // };
  
  // useEffect(() => {
  //   setHeight(collapse ? "0" : `${accordionBodyRef.current.scrollHeight}px`);
  //   // getMaxHeight()
  // }, [collapse, state]);

  return (
    <div
      className={`accordion ${
        variant === "secondary" ? "secondary-accordion" : ""
      }`}
    >
      <div className="accordion-header">
        <div className="acco-hadr-item">
          <h2>{title}</h2>
          <div
            className="acco-dropper-btn"
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            <DownArrow width={`${variant === "secondary" ? "12" : "14"}`} />
          </div>
        </div>
        {variant === "secondary" && (
          <div className="delete-btn" onClick={onDeleteFunc}>
            <Delete width={14} color="#f00" />
          </div>
        )}
      </div>
      <div
        className={`accordion-body ${collapse ? "collapse" : ""}`}
        // style={{ maxHeight: height }}
        ref={accordionBodyRef}
      >
        <div className="acco-cont-wrapper">{children}</div>
      </div>
    </div>
  );
};

// const InsideAccordion = () => {
//   return <>

//   </>;
// };

export default Accordion;
