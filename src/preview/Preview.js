import React, { useEffect, useRef } from "react";
import "./preview.scss";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { setPrint } from "../slices/printSlice/printSlice";
import Template1 from "../templates/template1/Template1";
import { useLocation } from "react-router-dom";

const Preview = () => {
    const location = useLocation();

  // const printRef = useRef();
  // const { shouldPrint } = useSelector((state) => {
  //   return state.print;
  // });
  // const dispatch = useDispatch();
  // const handlePrint = useReactToPrint({
  //   content: () => printRef.current, // Ref to the PrintContent component
  //   onAfterPrint: () => dispatch(setPrint(false)),
  // });

  // useEffect(() => {
  //   if (shouldPrint) {
  //     // console.log('printing');
  //     handlePrint();
  //   }
  // }, [handlePrint, shouldPrint]);

  useEffect(() => {
    const container = document.querySelector(".template-wrapper");
    const fontResizer = () => {
      const containerWidth = container.clientWidth;
      // console.log(
      //   "🚀 ~ file: template1.js:12 ~ container.addEventListener ~ contḁinerWidth:",  
      //   containerWidth
      // );
      const fontSize = containerWidth / 45; // Adjust the factor (10) as needed
      // console.log(fontSize);
      container.style.fontSize = fontSize + "px";
    };
    // const textInsideContainer = document.querySelector(".template-heading");
    if(location.pathname ==='/'){
      fontResizer()
    }

    window.addEventListener("load", () => fontResizer());
    window.addEventListener("resize", () => fontResizer());
  }, [location.pathname]);


  return (
    <div className="preview-container">
      {/* <div className="preview" ref={printRef}> */}
      <div className="preview">
        {/* <h1 style={{fontSize:"200%"}}>lolo</h1> */}
        <div className="template-wrapper">
          <Template1 />
        </div>
      </div>
    </div>
  );
};

export default Preview;
