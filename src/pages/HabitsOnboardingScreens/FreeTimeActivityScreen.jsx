import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

import {
  MainHeading,
  RequestHeaderContent,
  RequestHabitsWrapper,
  SubHeading,
  ButtonWrapper,
  InputTextWrapper,
} from "./HabitsOnboardingScreen.styles";

const FreeTimeActivityScreen = (props) => {
  const [checkedItems, setCheckedItems] = useState({});
  var currentPage = props.page;

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  //   useEffect(() => {
  //     console.log("checkedItems: ", checkedItems);
  //   }, [checkedItems]);

  const checkboxesData = [
    {
      name: "Sports",
      key: "sports",
      label: "Sports",
    },
    {
      name: "Fitness",
      key: "fitness",
      label: "Fitness",
    },
    {
      name: "Wellness",
      key: "wellness",
      label: "Wellness",
    },
  ];

  return (
    <RequestHabitsWrapper>
      <RequestHeaderContent>
        <MainHeading>
          Thank you {props.name} Next we would like to get to know you a bit
          better.
        </MainHeading>
        <SubHeading>
          What activities do you like to do in your free time?
        </SubHeading>
        <li style={{ display: "inline-block", verticalAlign: "center" }}>
          {checkboxesData.map((item) => (
            <label key={item.key}>
              {item.name}
              <Checkbox
                name={item.name}
                checked={checkedItems[item.name]}
                onChange={handleChange}
              />
            </label>
          ))}
        </li>
      </RequestHeaderContent>

      {Object.keys(checkedItems).length > 0 ? (
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
export default FreeTimeActivityScreen;
