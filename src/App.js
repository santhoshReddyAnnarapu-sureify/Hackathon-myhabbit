import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroductionScreen from "./pages/HabitsOnboardingScreens/IntroductionScreen";
import NameScreen from "./pages/NameScreen/NameScreen";
import MyHabitsScreen from "./pages/MyHabits/MyHabitsScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroductionScreen />} />
          <Route path="/name" element={<NameScreen />} />
          <Route path="/habits" element={<MyHabitsScreen />} />

          {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
