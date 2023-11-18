import React, { useEffect } from "react";
import "./preview.scss";

import Template1 from "../templates/template1/Template1";
import { useLocation } from "react-router-dom";

const Preview = () => {
    const location = useLocation();

  

  useEffect(() => {
    const container = document.querySelector(".template-wrapper");
    const fontResizer = () => {
      const containerWidth = container.clientWidth;
      
      const fontSize = containerWidth / 45; 
      container.style.fontSize = fontSize + "px";
    };
    if(location.pathname ==='/'){
      fontResizer()
    }

    window.addEventListener("load", () => fontResizer());
    window.addEventListener("resize", () => fontResizer());
  }, [location.pathname]);


  return (
    <div className="preview-container">
      <div className="preview">
        <div className="template-wrapper">
          <Template1 />
        </div>
      </div>
    </div>
  );
};

export default Preview;
