import React from 'react'
import { useSelector } from 'react-redux';

const TemplateContact = () => {
   const { personalDetails,  } = useSelector((state) => {
    return state.inputs;
  });

  const { email, address, phone } = personalDetails;
//   const { summary } = professionalSummary;

  return (email || address || phone) !== "" && (
    <div className="temp-sec-wrapper">
      <div className="temp-sec-heading">contact</div>

      <div className="temp-sec-data">
        <div className="temp-contact">
          <p>{address}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};


export default TemplateContact
