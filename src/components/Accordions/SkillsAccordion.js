import React from "react";
import Accordion from "../Accordion";
import AddBtn from "../AddBtn/AddBtn";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIncrementalInfo,
  updateStateArray,
} from "../../slices/inputSlice/inputSlice";

const SkillsAccordian = () => {
  const dispatch = useDispatch();

  const { skills } = useSelector((state) => {
    return state.inputs;
  });
  // console.log(
  //   "🚀 ~ file: SkillsAccordion.js:18 ~ const{skills}=useSelector ~ skills:",
  //   skills
  // );

  const addSkill = () => {
    dispatch(
      updateStateArray({
        obj: "skills",
        val: [
          ...skills,
          {
            skill: "",
          },
        ],
      })
    );
  };
  return (
    <Accordion title={"skills"} state={skills}>
      {skills.map((inputData, i) => {
        return (
          <InnerAccordion
            i={i}
            state={skills}
            key={"skill" + i}
            inputData={inputData}
          />
        );
      })}
      <AddBtn onClickFunc={addSkill} placeholder={"add Skill"} />
    </Accordion>
  );
};
const InnerAccordion = ({ state, setState, i, inputData }) => {
  const dispatch = useDispatch();

  const { skill } = inputData;
  // console.log(
  //   "🚀 ~ file: SkillsAccordion.js:53 ~ InnerAccordion ~ skill:",
  //   skill
  // );
  const deleteSkill = (index) => {
    // console.log("🚀 ~ file: EduAccordian.js:82 ~ deleteEdu ~ index:", index);

    const newState = state.filter((_, i) => i !== index);
    dispatch(
      updateStateArray({
        obj: "skills",
        val: [...newState],
      })
    );
  };

  const onChangeHandler = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    dispatch(updateIncrementalInfo({ obj: "skills", i, val, name }));
  };

  return (
    <Accordion
      title={"skill " + (i + 1)}
      variant={"secondary"}
      onDeleteFunc={() => deleteSkill(i)}
    >
      <Input
        id={"skill"}
        name={"skill"}
        onChange={onChangeHandler}
        value={skill}
      />
    </Accordion>
  );
};

export default SkillsAccordian;
