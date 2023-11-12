import React from "react";
import "./input.scss";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Input = ({ id, name, type = "text", onChange, value  }) => {
  return (
    <div className="input">
      {name && (
        /* <label className="input-label" htmlFor={id}> */
        <label className="input-label" >
          {name}
        </label>
      )}
      {type === "text" && (
        <input
          className="input-field"
          type="text"
          id={id}
          name={id}
          size="5"
          onChange={onChange}
          value={value}
        />
      )}
      {type === "textarea" && (
        <textarea
          className="input-field"
          id={id}
          name={id}
          rows={8}
          style={{ resize: "none" }}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

const DatePickerCustom = ({name,id, disabled=false,onChange,value}) => {
  // const dj = dayjs("2021-03-16T18:30:00.000Z");
  // console.log(dj);
  return (
    <div className="input">
      <label className="input-label" >
        {name}
      </label>

      <DatePicker
      // defaultValue={dayjs('2022-04-17')}
      value={dayjs(value)}
        onChange={(date) => onChange(date, id)}
        disabled={disabled}
        views={["month", "year"]}
        sx={{
          ".css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root": {
            fontSize: "16px",
            fontWeight: "400",

            "&.Mui-focused, &Mui-error": {
              fieldset: {
                borderWidth: "1px",
                outline: "none",
              },
            },
            // "&:hover": {
            //   fieldset: {
            // outline: "none",
            // border: "none",
            // border: "1px ",
            // borderColor: "#d0d5dd",
            // borderWidth: "1px",
            //   },
            // },

            fieldset: {
              borderRadius: "0",
            },

            input: {
              padding: "8px",
              color: "#000",
            },
          },
        }}
      />
    </div>
  );
};

export default Input;
export { DatePickerCustom };
