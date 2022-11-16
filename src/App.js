import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyle/global.styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./globalStyle/theme";

import Home from "./components/pages/Home/Home";
import NFTS from "./components/pages/Nfts/NFTS";

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainContainer>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/placetostay" element={<NFTS />} />
            </Routes>
          </Router>
        </MainContainer>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;
