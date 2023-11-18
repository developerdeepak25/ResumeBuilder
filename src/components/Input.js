import React from "react";
import "./input.scss";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const Input = ({ id, name, type = "text", onChange, value }) => {
  return (
    <div className="input">
      {name && (
        <label className="input-label">{name}</label>
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

const DatePickerCustom = ({ name, id, disabled = false, onChange, value }) => {
  return (
    <div className="input">
      <label className="input-label">{name}</label>

      <DatePicker
        value={dayjs(value)}
        onChange={(date) => onChange(date, id)}
        disabled={disabled}
        views={["month", "year"]}
        sx={{
          ".MuiInputBase-root": {
            fontSize: "16px",
            fontWeight: "400",

            "&.Mui-focused, &.Mui-error": {
              fieldset: {
                borderWidth: "1px",
                outline: "none",
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderWidth: "1px",
                outline: "none",
              },
            },
          },

          ".MuiOutlinedInput-notchedOutline": {
            borderRadius: "0",
            borderWidth: "1px",
          },
          fieldset: {
            borderRadius: "0",
            borderWidth: "1px",
          },

          input: {
            padding: "8px",
            color: "#565656",
          },
        }}
      />
    </div>
  );
};

export default Input;
export { DatePickerCustom };
