import React from "react";
import { useSelector } from "react-redux";
import './temp1Comp.scss'

const TemplateInto = () => {
  const { personalDetails, professionalSummary } = useSelector((state) => {
    return state.inputs;
  });

  const { fname, lname,  jobTitle } = personalDetails;
  const { summary } = professionalSummary;

  return (
    <div className="temp-intro">
      <h1>{fname || lname !== "" ? fname + " " + lname : "Your Name"}</h1>
      <h2>{jobTitle !== "" ? jobTitle : "job title or seeking job title"}</h2>
     
      <p>{summary !== "" ? summary : "Your professional or personal summary comes here"}</p>
    </div>
  );
};

export default TemplateInto;
