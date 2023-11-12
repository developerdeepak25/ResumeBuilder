import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useEffect, useState } from "react";

const CustomSwitch = ({ setInputDisable,label }) => {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  useEffect(() => {
    setInputDisable(checked);
  }, [checked, setInputDisable]);

  return (
    <FormGroup>
      <FormControlLabel
        sx={{
          marginLeft: 0,
          ".css-ahj2mt-MuiTypography-root": {
            fontSize: "14px",
            fontWeight: "400",
            color: "#545454",
          },
        }}
        control={
          <Switch
            onClick={() => setChecked(!checked)}
            sx={{
              ".css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked":
                {
                  color: "#00d856",
                },
              ".css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track  ":
                {
                  backgroundColor: "#00d856",
                },
            }}
            // defaultChecked
            size="small"
            checked={checked}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default CustomSwitch;
