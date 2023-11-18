import React from "react";
import "./template1.scss";
import TemplateInto from "./temp1 comp/TemplateInto";
import TemplateSkills from "./temp1 comp/TemplateSkills";
import TemplateEducation from "./temp1 comp/TemplateEducation";
import TemplateExperience from "./temp1 comp/TemplateExperience";
import TemplateContact from "./temp1 comp/TemplateContact";

// for each template tyling should be in em that's mendatory

const Template1 = () => {

  return (
    <div className="template1-body ">
     
      <TemplateInto />
      <TemplateSkills />
      <TemplateEducation />
      <TemplateExperience />
      <TemplateContact />
    </div>
  );
};

export default Template1;
