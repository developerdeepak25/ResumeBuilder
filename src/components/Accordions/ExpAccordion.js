import React, { useEffect, useState } from "react";
import Accordion from "../Accordion";
import AddBtn from "../AddBtn/AddBtn";
import Input, { DatePickerCustom } from "../Input";
import CustomSwitch from "../CustomSwitch";
// import { Input } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import {
  updateIncrementalInfo,
  updateStateArray,
} from "../../slices/inputSlice/inputSlice";
// import dayjs from "dayjs";

const ExpAccordion = () => {
  // const [state, setState] = useState([{ exp: "" }]);
  const dispatch = useDispatch();

  // const [dateInputDisabled, setDateInputDisabled] = useState(false);
  const { experience } = useSelector((state) => {
    console.log('global state',state);
    return state.inputs;
  });
  // console.log(
  //   "🚀 ~ file: ExpAccordion.js:17 ~ const{experience}=useSelector ~ experience:",
  //   experience
  // );

  const addeExp = () => {
    // setState([...state, { exp: "" }]);
    dispatch(
      updateStateArray({
        obj: "experience",
        val: [
          ...experience,
          {
            jobTitle: "",
            company: "",
            location: "",
            startDate: "2001-01-1",
            endDate: "2001-01-1",
            description: "",
            ongoing: false,
          },
        ],
      })
    );
  };

  return (
    <Accordion title={"Experience"} state={experience}>
      {experience.map((inputData, i) => {
        return (
          <InnerAccordion
            i={i}
            state={experience}
            // setState={setState}
            key={"exp" + i}
            inputData={inputData}
          />
        );
      })}
      <AddBtn onClickFunc={addeExp} placeholder={"add Experience"} />
    </Accordion>
  );
};

const InnerAccordion = ({ i, state, setState, inputData }) => {
  console.log(
    "🚀 ~ file: ExpAccordion.js:63 ~ InnerAccordion ~ inputData:",
    inputData
  );
  const { jobTitle, company, location, description, startDate, endDate } =
    inputData;
  const [dateInputDisable, setDateInputDisable] = useState(false);
  const dispatch = useDispatch();
  const sliceState = useSelector((state) => {
    return state.inputs;
  });
  console.log(sliceState.experience);

  const deleteExp = (index) => {
    console.log("🚀 ~ file: EduAccordian.js:82 ~ deleteEdu ~ index:", index);

    const newState = state.filter((_, i) => i !== index);
    // setState(newState);
    dispatch(
      updateStateArray({
        obj: "experience",
        val: [...newState],
      })
    );
  };

  const onChangeHandler = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    console.log(
      "🚀 ~ file: ExpAccordion.js:40 ~ InnerAccordion ~ onChang̥eHandler:",
      val,
      name
    );

    dispatch(updateIncrementalInfo({ obj: "experience", i, val, name }));
  };
  const monthChangeHandler = (date, id) => {
    const serializedDate = date.toISOString();
    // const initialDate = new Date(serializedDate);

    // console.log("🚀 ~ file: ExpAccordion.js:62 ~ monthChangeHandler ~ date:", date)
    // console.log(initialDate.getMonth(), serializedDate);
    console.log(serializedDate);
    // console.log(dayjs(serializedDate).format("MMMM")); // can be used to get date value even data "nonselerlaized data" can also be used but gives error when storing to store, we hav econverted date"provided by mui" in iso format to store

    //we will use dayjs to retrive month and year form selrialzedDate value stored in store , in our reume template

   

    dispatch(
      updateIncrementalInfo({
        obj: "experience",
        i,
        val: serializedDate,
        name: id,
      })
    );
  };

  useEffect(() => {
    console.log("inside useEffect");
    dispatch(
      updateIncrementalInfo({
        obj: "experience",
        i,
        val: dateInputDisable,
        name: "ongoing",
      })
    );
    
  }, [dateInputDisable, i]);

  return (
    <Accordion
      // key={i}
      title={"Experience " + (i + 1)}
      variant={"secondary"}
      onDeleteFunc={() => deleteExp(i)}
    >
      <div className="form-row">
        <Input
          id={"jobTitle"}
          name={"job title"}
          onChange={onChangeHandler}
          value={jobTitle}
        />
        <Input
          id={"company"}
          name={"company name"}
          onChange={onChangeHandler}
          value={company}
        />
      </div>
      <Input
        id={"location"}
        name={"company's location"}
        onChange={onChangeHandler}
        value={location}
      />

      <div className="form-row">
        {/* <DatePickerCustom id={"edu-start-date"} name={"start Date"} /> */}
        <DatePickerCustom
          id={"startDate"}
          name={"start Date"}
          onChange={monthChangeHandler}
          value={startDate}
        />
        <div className="form-col">
          {/* <DatePickerCustom
            disabled={dateInputDisable}
            id={"edu-end-date"}
            name={"end Date"}
          /> */}
          <DatePickerCustom
            disabled={dateInputDisable}
            id={"endDate"}
            name={"end Date"}
            onChange={monthChangeHandler}
            value={endDate}
          />
          <CustomSwitch
            setInputDisable={setDateInputDisable}
            label={"I currently work here"}
          />{" "}
        </div>
      </div>

      <Input
        id={"description"}
        type="textarea"
        name="description"
        onChange={onChangeHandler}
        value={description}
      />
    </Accordion>
  );
};

export default ExpAccordion;
