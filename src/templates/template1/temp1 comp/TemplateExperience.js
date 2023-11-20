import dayjs from 'dayjs';
import React from 'react'
import { useSelector } from 'react-redux';

const TemplateExperience = () => {
  
    const { experience } = useSelector((state) => {
    return state.inputs;
  });

  return experience.length !== 0 && (
    <div className="temp-sec-wrapper">
      <div className="temp-sec-heading">experience</div>
      <div className="temp-sec-data">
        <div className="temp-exps">
          {experience.map((experience,i) => {
            const { jobTitle, company, location, startDate, endDate, description,ongoing} =
              experience;
            return jobTitle && company && startDate && location !== "" ? (
              <div className="temp-exp" key={i}>
                <h3>
                  {jobTitle} <span>at {company}, {location}</span>
                </h3>
                <p>
                  {dayjs(startDate).format("YYYY")} -{" "}
                  {!ongoing ? dayjs(endDate).format("YYYY") : "Today"}
                </p>
                <p>{description}</p>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
  
}

export default TemplateExperience
