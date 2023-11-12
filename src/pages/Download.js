import React, { useEffect, useRef } from "react";
import "./download.scss";
import Template1 from "../templates/template1/Template1";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import { setPrint } from "../slices/printSlice/printSlice";

const Download = () => {
  const printRef = useRef();
  const { shouldPrint } = useSelector((state) => {
    return state.print;
  });
  const dispatch = useDispatch();
  const handlePrint = useReactToPrint({
    content: () => printRef.current, // Ref to the PrintContent component
    onAfterPrint: () => dispatch(setPrint(false)),
  });

  useEffect(() => {
    if (shouldPrint) {
      // console.log('printing');
      handlePrint();
    }
  }, [handlePrint, shouldPrint]);

  useEffect(() => {
    const container = document.querySelector(".download-content");
    const fontResizer = () => {
      const containerWidth = container.clientWidth;

      const fontSize = containerWidth / 45; //
      container.style.fontSize = fontSize + "px";
    };

    fontResizer();
  }, []);
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="download-wrapper">
          <div className="download-scroll">
            <div className="download-spacing">
              <div className="download-content" ref={printRef}>
                <Template1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
