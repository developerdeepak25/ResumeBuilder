import React from "react";
import Accordion from "../Accordion";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { updateNonIncrementalInfo } from "../../slices/inputSlice/inputSlice";
const DetailsAccordion = () => {

  const { personalDetails } = useSelector((state) => {
    return state.inputs;
  });
  const {jobTitle,fname, lname,address,phone,email} = personalDetails
  console.log("personalDetails", personalDetails);

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    console.log(
      "🚀 ~ file: ExpAccordion.js:40 ~ InnerAccordion ~ onChang̥eHandler:",
      val,
      name
    );

    dispatch(updateNonIncrementalInfo({ obj: "personalDetails", val, name }));
  };
  return (
    <Accordion title={"personal details"}>
      <Input
        id={"jobTitle"}
        name={"wanted job title"}
        type="text"
        onChange={onChangeHandler}
        value={jobTitle}
      />
      <div className="form-row">
        <Input
          id={"fname"}
          name={"first name"}
          type="text"
          onChange={onChangeHandler}
          value={fname}
        />
        {/* name doesnt actually means input field name */}
        <Input
          id={"lname"}
          name={"last name"}
          type="text"
          onChange={onChangeHandler}
          value={lname}
        />
      </div>
      <Input
        id={"address"}
        name={"address"}
        type="text"
        onChange={onChangeHandler}
        value={address}
      />
      <div className="form-row">
        <Input
          id={"phone"}
          name={"phone"}
          type="text"
          onChange={onChangeHandler}
          value={phone}
        />
        <Input
          id={"email"}
          name={"email"}
          type="text"
          onChange={onChangeHandler}
          value={email}
        />
      </div>
    </Accordion>
  );
};

export default DetailsAccordion;
