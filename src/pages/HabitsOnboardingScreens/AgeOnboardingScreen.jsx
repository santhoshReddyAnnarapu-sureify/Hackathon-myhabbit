import { Button } from "@mui/material";
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

const AgeOnboardingScreen = (props) => {
  const [age, setAge] = useState("");
  var currentPage = props.page;

  const handleChange = (event) => {
    console.log(event.target.value);
    const ageValue = event.target.value;
    const numericValue = ageValue.replace(/[^0-9]/g, "");
    if (numericValue.length <= 2) {
      if (numericValue > 0){
        setAge(numericValue);
      } else {
        setAge("")
      }
    }
    console.log("Age: ", age);
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
        <SubHeading>How old are you?</SubHeading>
        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          size="small"
          type="number"
          value={age}
          onChange={handleChange}
          style={{ width: "60%" }}
          onKeyPress={handleKeyPress}
          inputProps={{ maxLength: 2 }}
        />
      </RequestHeaderContent>
      {age.length ? (
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

export default AgeOnboardingScreen;
