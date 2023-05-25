import ReactModal from "react-modal";
import React, { useState } from "react";
import IntroductionScreen from "../HabitsOnboardingScreens/IntroductionScreen";
import NameOnboardingScreen from "../HabitsOnboardingScreens/NameOnboardingScreen";
import StateAndZipCodeOnboardingScreen from "../HabitsOnboardingScreens/StateAndZipCodeOnboardingScreen";
import AgeOnboardingScreen from "../HabitsOnboardingScreens/AgeOnboardingScreen";
import DescribesYouScreen from "../HabitsOnboardingScreens/DescribesYouScreen";
import FndDescribesYouScreen from "../HabitsOnboardingScreens/FndDescribesYouScreen";
import FreeTimeActivityScreen from "../HabitsOnboardingScreens/FreeTimeActivityScreen";
import useDeviceDetect from "../../utils/deviceDetector";

import LinearProgress from "@mui/material/LinearProgress";
import MotivatesYouScreen from "../HabitsOnboardingScreens/MotivatesScreen";

function MyHabitsScreen() {
  const { isMobile } = useDeviceDetect();
  const [openDialogStatus, setOpenDialogStatus] = useState(false);
  const [page, setPage] = useState(1);

  const progress = (page / 9) * 100;
  const openDialog = () => {
    setOpenDialogStatus(true);
  };

  const closeDialog = () => {
    setOpenDialogStatus(false);
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
            <h1>Done</h1>
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
      <button onClick={openDialog}>Open Dialog</button>
      <ReactModal
        style={{
          content: {
            height: "40%",
            width: "40%",
            margin: "auto",
            borderRadius: "5px",
            padding: "auto",
          },
          overlay: {},
        }}
        isOpen={openDialogStatus}
        onRequestClose={closeDialog}
        shouldCloseOnOverlayClick={false}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            backgroundImage:
              "url('https://smallbusinessify.com/wp-content/uploads/2021/07/How-To-Start-Good-Habits.jpg')",
            filter: "blur(8px)",
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
          <button onClick={closeDialog}>close Dialog</button>
        </div>
      </ReactModal>
    </div>
  );
}

export default MyHabitsScreen;
