import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";

const TemplateEducation = () => {
  const { education } = useSelector((state) => {
    return state.inputs;
  });

  return education.length !== 0 && (
    <div className="temp-sec-wrapper">
      <div className="temp-sec-heading">education</div>
      <div className="temp-sec-data">
        <div className="temp-edus">
          {/* <div className="ul-edu"> */}
          {education.map((education) => {
            const { school, degree, location, startDate, endDate, ongoing } =
              education;
            return school && degree && startDate && location !== "" ? (
              <div className="temp-edu">
                <h3>
                  {school}, {location}
                </h3>
                <p>{degree}</p>
                <p>
                  {dayjs(startDate).format("YYYY")} -{" "}
                  {!ongoing ? dayjs(endDate).format("YYYY") : "Today"}
                </p>
              </div>
            ) : null;
          })}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default TemplateEducation;
