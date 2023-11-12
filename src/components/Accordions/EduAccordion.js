import React, { useEffect, useState } from "react";
import Accordion from "../Accordion";
// import { DatePicker } from "@mui/x-date-pickers";
import Input, { DatePickerCustom } from "../Input";
// import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import AddBtn from "../AddBtn/AddBtn";
import CustomSwitch from "../CustomSwitch";
import { useDispatch, useSelector } from "react-redux";
import {
  updateIncrementalInfo,
  updateStateArray,
} from "../../slices/inputSlice/inputSlice";
import dayjs from "dayjs";

const EduAccordian = () => {
  const dispatch = useDispatch();

  // const [dateInputDisabled, setDateInputDisabled] = useState(false);
  const { education } = useSelector((state) => {
    return state.inputs;
  });
  console.log("🚀 ~ file: EduAccordion.js:22 ~ const{education}=useSelector ~ education:", education)
  

  const addEdu = () => {
    // setState([...state, { exp: "" }]);
    dispatch(
      updateStateArray({
        obj: "education",
        val: [
          ...education,
          {
            school: "",
            location: "",
            degree: "",
            startDate: "2001-01-1",
            endDate: "2001-01-1",
            ongoing: false,
          },
        ],
      })
    );
  };

  return (
    <Accordion title={"education"} state={education}>
      {/* <Input id={"summary"}  type="textarea" /> */}
      {education.map((inputData, i) => {
        /* return (
          <Accordion
            key={i}
            title={"education " + (i + 1)}
            variant={"secondary"}
            onDelete={() => deleteEdu(i)} //this approch might change when we will use redux-toolkit as in redux-toolkit we will not need to pass props as we can use a reducer func from the accordion file
          >
            <div className="form-row">
              <Input id={"school"} name={"School name"} />
              <Input id={"location"} name={"location"} />
            </div>
            <Input id={"degree"} name={"degree"} />
            <div className="form-row">
              <DatePickerCustom id={"start-date"} name={"start Date"} />
              <div className="form-col">
                <DatePickerCustom
                  disabled={dateInputDisabled}
                  id={"end-date"}
                  name={"end Date"}
                />
                <CustomSwitch setDateInputDisabled={setDateInputDisabled} />
              </div>
            </div>
          </Accordion>
        ); */
        return (
          <InnerAccordion
            key={"edu" + i}
            // addEdu={addEdu}
            i={i}
            // setState={setState}
            state={education}
            inputData={inputData}
          />
        );
      })}
      <AddBtn onClickFunc={addEdu} placeholder={"add Education"} />
    </Accordion>
  );
};

const InnerAccordion = ({ i, state, setState, inputData }) => {
  console.log("🚀 ~ file: EduAccordion.js:92 ~ InnerAccordion ~ inputData:", inputData)

  const dispatch = useDispatch()
    const { school, location, degree, startDate, endDate } = inputData;
    

  const [dateInputDisable, setDateInputDisable] = useState(false);

  // const addEdu = () => {
  //   setState([...state, { edu: "" }]);
  // };

  const deleteEdu = (index) => {
    console.log("🚀 ~ file: EduAccordian.js:82 ~ deleteEdu ~ index:", index);

    const newState = state.filter((_, i) => i !== index);
  
    // setState(newState);
    dispatch(
      updateStateArray({
        obj: "education",
        val: [...newState],
      })
    );
  };
  const onChangeHandler = (e) => {
    const val = e.target.value;
    const name = e.target.name;


    dispatch(updateIncrementalInfo({ obj: "education", i, val, name }));
  };

  const monthChangeHandler = (date, id) => {
    const serializedDate = date.toISOString();
    
    // console.log("dayjs", dayjs(serializedDate).format("MMMM"),serializedDate ,date);
    
    dispatch(
      updateIncrementalInfo({
        obj: "education",
        i,
        val: serializedDate,
        name: id,
      })
    );
  };
   useEffect(() => {
    //  console.log("inside useEffect");
     dispatch(
       updateIncrementalInfo({
         obj: "education",
         i,
         val: dateInputDisable,
         name: "ongoing",
       })
     );
   }, [dateInputDisable, i]);

  return (
    <Accordion
      // key={i}
      title={"education " + (i + 1)}
      variant={"secondary"}
      onDeleteFunc={() => deleteEdu(i)} //this approch might change when we will use redux-toolkit as in redux-toolkit we will not need to pass props as we can use a reducer func from the accordion file
    >
      <div className="form-row">
        <Input
          id={"school"}
          name={"School name"}
          onChange={onChangeHandler}
          value={school}
        />
        <Input
          id={"location"}
          name={"Location"}
          onChange={onChangeHandler}
          value={location}
        />
      </div>
      <Input
        id={"degree"}
        name={"Degree"}
        onChange={onChangeHandler}
        value={degree}
      />
      <div className="form-row">
        <DatePickerCustom
          id={"startDate"}
          name={"Start Date"}
          onChange={monthChangeHandler}
          value={startDate}
        />
        <div className="form-col">
          <DatePickerCustom
          disabled={dateInputDisable}
            id={"endDate"}
            name={"End Date"}
            onChange={monthChangeHandler}
            value={endDate}
          />
          <CustomSwitch
            setInputDisable={setDateInputDisable}
            label={"I currently study here"}
          />
        </div>
      </div>
    </Accordion>
  );
};

export default EduAccordian;
