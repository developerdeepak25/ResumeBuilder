import React from "react";
import { useSelector } from "react-redux";

const TemplateSkills = () => {
  const { skills } = useSelector((state) => {
    return state.inputs;
  });

  return (
    skills.length !== 0 && (
      <div className="temp-sec-wrapper">
        <div className="temp-sec-heading">skills</div>

        <div className="temp-sec-data">
          <div className="temp-skills">
            <ul className="ul-skills">
              {skills.map((skillData,i) => {
                return <li key={i} className="li-skill">{skillData.skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default TemplateSkills;
