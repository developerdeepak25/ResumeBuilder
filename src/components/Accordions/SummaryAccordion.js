import React from "react";
import Accordion from "../Accordion";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { updateNonIncrementalInfo } from "../../slices/inputSlice/inputSlice";

const SummaryAccordion = () => {
  const { professionalSummary } = useSelector((state) => {
    return state.inputs;
  });

  const {summary} = professionalSummary

  // console.log(
  //   "🚀 ~ file: SummaryAccordion.js:14 ~ const{professionalSummary}=useSelector ~ professionalSummary:",
  //   professionalSummary
  // );

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    // console.log(
    //   "🚀 ~ file: ExpAccordion.js:40 ~ InnerAccordion ~ onChang̥eHandler:",
    //   val,
    //   name
    // );
   

    dispatch(
      updateNonIncrementalInfo({ obj: "professionalSummary", val, name })
    );
  };

  return (
    <Accordion title={"professional summary"}>
      <Input
        id={"summary"}
        type="textarea"
        onChange={onChangeHandler}
        value={summary}
      />
    </Accordion>
  );
};

export default SummaryAccordion;
