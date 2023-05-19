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

const NameOnboardingScreen = (props) => {
  const [name, setName] = useState("");
  var currentPage = props.page;

  const handleChange = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
    console.log("name: ", name);
  };

  return (
    <RequestHabitsWrapper>
      <RequestHeaderContent>
        <MainHeading>
          Before we help you build healthy habits, let's start with
          introductions.
        </MainHeading>
        <SubHeading>What's your name?</SubHeading>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          size="small"
          onChange={handleChange}
          style={{ width: "60%" }}
        />
      </RequestHeaderContent>
      {name.length ? (
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

export default NameOnboardingScreen;
