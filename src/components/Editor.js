import React from "react";
import "./Editor.scss";
import EduAccordian from "./Accordions/EduAccordion";
import SkillsAccordion from "./Accordions/SkillsAccordion";
import ExpAccordion from "./Accordions/ExpAccordion";
import SummaryAccordion from "./Accordions/SummaryAccordion";
import DetailsAccordion from "./Accordions/DetailsAccordion";

const Editor = () => {
  return (
    <div className="editor">
      <div className="editor-body">
        <div className="editor-accordions">
          {/* first form */}
          <DetailsAccordion />
          {/*  */}

          {/* 2nd form */}
          <SummaryAccordion />

          {/* 3rd form */}
          <EduAccordian />

          {/* 4th form  */}
          <SkillsAccordion />

          {/* 5th form */}
          <ExpAccordion />
        </div>
      </div>
    </div>
  );
};

export default Editor;
