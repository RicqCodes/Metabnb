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
  max-width: 124rem;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;

  ${AppContainer} & {
    width: 100vw;
  }
`;
