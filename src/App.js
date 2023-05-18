import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroductionScreen from "./pages/IntroductionScreens/IntroductionScreens";
import NameScreen from "./pages/NameScreen/NameScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<IntroductionScreen />} />
            <Route path="/name" element={<NameScreen />} />

            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
       
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
