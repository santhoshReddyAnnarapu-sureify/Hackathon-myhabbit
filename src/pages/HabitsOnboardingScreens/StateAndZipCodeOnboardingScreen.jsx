import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

import {
  MainHeading,
  RequestHeaderContent,
  RequestHabitsWrapper,
  SubHeading,
  ButtonWrapper,
  InputTextWrapper,
} from "./HabitsOnboardingScreen.styles";

const StateAndZipCodeOnboardingScreen = (props) => {
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  var currentPage = props.page;

  const handleChange = (event) => {
    console.log(event.target.value);
    const zipValue = event.target.value;
    const numericValue = zipValue.replace(/[^0-9]/g, "");
    if (numericValue.length <= 5) {
      if (numericValue > 0) {
        setZipCode(numericValue);
      } else {
        setZipCode("");
      }
    }
    console.log("ZipCode: ", zipValue);
  };

  const handleDropDownChange = (event) => {
    console.log(event.target.value);
    const stateValue = event.target.value;
    setState(stateValue);
    console.log("State: ", stateValue);
  };

  const handleKeyPress = (event) => {
    // Prevent non-numeric and scientific notation characters
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    if (!/^[0-9]+$/.test(keyValue) || /^(e|E)$/.test(keyValue)) {
      event.preventDefault();
    }
  };

  return (
    <RequestHabitsWrapper>
      <RequestHeaderContent>
        <MainHeading>
          Before we help you build healthy habits, let's start with
          introductions.
        </MainHeading>
        <SubHeading>Where do you live?</SubHeading>
        <div style={{ display: "inline" }}>
          <TextField
            id="outlined-basic"
            label="Zip"
            variant="outlined"
            size="small"
            type="number"
            value={zipCode}
            onChange={handleChange}
            style={{ width: "50%" }}
            onKeyPress={handleKeyPress}
            inputProps={{ maxLength: 5 }}
          />

          <FormControl sx={{ m: 0, minWidth: 100 }} style={{ left: 10 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              State
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={state}
              onChange={handleDropDownChange}
              autoWidth
              size="small"
              label="State"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Californina"}>Californina</MenuItem>
              <MenuItem value={"Massachusstes"}>Massachusstes</MenuItem>
              <MenuItem value={"Canberra"}>Canberra</MenuItem>
            </Select>
          </FormControl>
        </div>
      </RequestHeaderContent>
      {zipCode.length && state.length ? (
        <ButtonWrapper style={{ margin: "auto", display: "block" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              props.setPage(++currentPage);
            }}
          >
            Next
          </Button>
        </ButtonWrapper>
      ) : null}
    </RequestHabitsWrapper>
  );
};
export default StateAndZipCodeOnboardingScreen;
