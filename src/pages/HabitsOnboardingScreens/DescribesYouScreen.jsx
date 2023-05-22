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

const DescribesYouScreen = (props) => {
  const [describe, setDescribe] = useState("");
  var currentPage = props.page;

  const handleDropDownChange = (event) => {
    console.log(event.target.value);
    const describeValue = event.target.value;
    setDescribe(describeValue);
    console.log("Describes You : ", describeValue);
  };

  return (
    <RequestHabitsWrapper>
      <RequestHeaderContent>
        <MainHeading>
          Thank you {props.name} Next we would like to get to know you a bit
          better.
        </MainHeading>
        <SubHeading>How would you describe yourself?</SubHeading>

        <FormControl sx={{ m: 0, minWidth: 300 }} style={{ left: 10 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Describes You
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={describe}
            onChange={handleDropDownChange}
            autoWidth
            label="Describe"
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
      {describe.length ? (
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
export default DescribesYouScreen;
