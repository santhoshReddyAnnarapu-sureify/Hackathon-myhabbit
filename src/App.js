import { BrowserRouter, Route, Routes } from "react-router-dom";
import IntroductionScreen from "./pages/HabitsOnboardingScreens/IntroductionScreen";
import NameScreen from "./pages/NameScreen/NameScreen";
import MyHabitsScreen from "./pages/MyHabits/MyHabitsScreen";
import NavBar from "./components/navbar/index";
import { MainApp, MainBody, PageContainer } from "./app.styles";
import TermsAndConditions from "./pages/termsAndConditions";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/footer";

const GlobalStyle = createGlobalStyle`
#root {
   font-family: 'Proxima Nova';
}
`;

function App() {
  return (
    <MainApp className="App">
      <GlobalStyle />
      <BrowserRouter>
        <PageContainer>
          <NavBar />
          <MainBody>
            <Routes>
              <Route path="/" element={<IntroductionScreen />} />
              <Route path="/name" element={<NameScreen />} />
              <Route path="/habits" element={<MyHabitsScreen />} />
              <Route
                path="/termsandconditions"
                element={<TermsAndConditions />}
              />
              {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
            </Routes>
          </MainBody>
          <Footer />
        </PageContainer>
      </BrowserRouter>
    </MainApp>
  );
}

export default App;
