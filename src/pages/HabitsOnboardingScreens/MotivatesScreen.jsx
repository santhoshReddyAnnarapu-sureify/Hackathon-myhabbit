import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";

import {
  MainHeading,
  RequestHeaderContent,
  RequestHabitsWrapper,
  SubHeading,
  ButtonWrapper,
  InputTextWrapper,
} from "./HabitsOnboardingScreen.styles";

const MotivatesYouScreen = (props) => {
  const [motivates, setMotivates] = useState("");
  var currentPage = props.page;

  const handleDropDownChange = (event) => {
    console.log(event.target.value);
    const motivateValue = event.target.value;
    setMotivates(motivateValue);
    console.log("Motivates You : ", motivateValue);
  };

  return (
    <RequestHabitsWrapper>
      <RequestHeaderContent>
        <MainHeading>
          Almost there!Last but not least,let's talk about motivation & goals.
        </MainHeading>
        <SubHeading>What motivates you most in life?</SubHeading>

        <FormControl sx={{ m: 0, minWidth: 300 }} style={{ left: 10 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Motivates you.
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={motivates}
            onChange={handleDropDownChange}
            autoWidth
            label="Motivates"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Introvert"}>Introvert</MenuItem>
            <MenuItem value={"Confident"}>Massachusstes</MenuItem>
            <MenuItem value={"Happiness"}>Happiness</MenuItem>
          </Select>
        </FormControl>
      </RequestHeaderContent>
      {motivates.length ? (
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
export default MotivatesYouScreen;
