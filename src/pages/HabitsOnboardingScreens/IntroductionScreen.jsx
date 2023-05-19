import { Button } from "@mui/material";
import React from "react";

import {
  MainHeading,
  RequestHeaderContent,
  RequestHabitsWrapper,
  SubHeading,
  ButtonWrapper,
} from "./HabitsOnboardingScreen.styles";

const IntroductionScreen = (props) => {
  var currentPage = props.page;

  return (
    <RequestHabitsWrapper>
      <RequestHeaderContent>
        <MainHeading>Welcome to My Habits</MainHeading>
        <SubHeading>
          We're here to help you create good habits, break bad ones and help you
          achieve your goals!
        </SubHeading>
      </RequestHeaderContent>
      <ButtonWrapper style={{ margin: "auto", display: "block" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.setPage(++currentPage);
          }}
        >
          Let's Get Started
        </Button>
      </ButtonWrapper>
    </RequestHabitsWrapper>
  );
};

export default IntroductionScreen;
