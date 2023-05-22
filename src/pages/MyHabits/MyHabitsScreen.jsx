import ReactModal from "react-modal";
import React, { useState } from "react";
import IntroductionScreen from "../HabitsOnboardingScreens/IntroductionScreen";
import NameOnboardingScreen from "../HabitsOnboardingScreens/NameOnboardingScreen";
import StateAndZipCodeOnboardingScreen from "../HabitsOnboardingScreens/StateAndZipCodeOnboardingScreen";
import AgeOnboardingScreen from "../HabitsOnboardingScreens/AgeOnboardingScreen";
import DescribesYouScreen from "../HabitsOnboardingScreens/DescribesYouScreen";
import FndDescribesYouScreen from "../HabitsOnboardingScreens/FndDescribesYouScreen";
import FreeTimeActivityScreen from "../HabitsOnboardingScreens/FreeTimeActivityScreen";

import LinearProgress from "@mui/material/LinearProgress";
import MotivatesYouScreen from "../HabitsOnboardingScreens/MotivatesScreen";

function MyHabitsScreen() {
  const [isOpen, setIsOpen] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  const progress = (page / 4) * 100;
  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const renderHabitsPageContent = (page) => {
    switch (page) {
      case 1:
        return <IntroductionScreen setPage={setPage} page={page} />;
      case 2:
        return <NameOnboardingScreen setPage={setPage} page={page} />;
      case 3:
        return <AgeOnboardingScreen setPage={setPage} page={page} />;
      case 4:
        return (
          <StateAndZipCodeOnboardingScreen setPage={setPage} page={page} />
        );
      case 5:
        return <DescribesYouScreen setPage={setPage} page={page} />;
      case 6:
        return <FndDescribesYouScreen setPage={setPage} page={page} />;
      case 7:
        return <FreeTimeActivityScreen setPage={setPage} page={page} />;
      case 8:
        return <MotivatesYouScreen setPage={setPage} page={page} />;
      case 9:
        return (
          <div>
            <h1>Welcome</h1>
          </div>
        );

      default:
        return (
          <div>
            <h1>Default</h1>
          </div>
        );
    }
  };

  return (
    <div>
      {/* <button onClick={openDialog}>Open Dialog</button> */}
      <ReactModal
        style={{
          content: {
            height: "70%",
            width: "50%",
            margin: "auto",
            borderRadius: "5px",
            padding: "auto",
          },
          overlay: {},
        }}
        isOpen={isOpen}
        onRequestClose={closeDialog}
        shouldCloseOnOverlayClick={false}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/04/51/37/14/360_F_451371442_f38FghggvarCVAASmQ8SPZ52NnSjBkJY.jpg')",
            filter: "blur(6px)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        >
          <LinearProgress variant="determinate" value={progress} />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            {renderHabitsPageContent(page)}
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default MyHabitsScreen;
