import React from "react";

import {
  MainHeading,
  RequestHeaderContent,
  RequestHabitsWrapper,
  SubHeading,
} from "./IntroductionScreen.styles";

const IntroductionScreen = () => {
  return (
    <RequestHabitsWrapper>
      <RequestHeaderContent>
        <MainHeading>Welcome to My Habits</MainHeading>
        <SubHeading>
          We're here to help you create good habits, break bad ones and help you
          achieve your goals!
        </SubHeading>
      </RequestHeaderContent>
    </RequestHabitsWrapper>
  );
};

export default IntroductionScreen;
