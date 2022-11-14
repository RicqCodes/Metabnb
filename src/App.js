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
              <Route path="/nfts" element={<NFTS />} />
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
  max-width: 144rem;
`;

const MainContainer = styled.div`
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;

  ${AppContainer} & {
    width: 100vw;
  }

  /* @media (max-width: 80rem) {
    ${AppContainer} & {
      width: 130rem;
    }
  }

  @media (max-width: 72rem) {
    ${AppContainer} & {
      width: 120rem;
    }
  }

  @media (max-width: 68rem) {
    ${AppContainer} & {
      width: 125rem;
    }
  }

  @media (max-width: 64rem) {
    ${AppContainer} & {
      width: 114rem;
    }
  }

  @media (max-width: 45rem) {
    ${AppContainer} & {
    }
  }

  @media (max-width: 40rem) {
    ${AppContainer} & {
      width: 110rem;
    }
  }

  @media (max-width: 37rem) {
    ${AppContainer} & {
    }
  }

  @media (max-width: 3r4em) {
    ${AppContainer} & {
      width: 92rem;
    }
  }

  @media (max-width: 30rem) {
    ${AppContainer} & {
      width: 82rem;
    }
  }

  @media (max-width: 26rem) {
    ${AppContainer} & {
      width: 100%;
    }
  } */

  /* @media (max-width: 25em) {
    ${AppContainer} & {
      width: 68rem;
    }
  }

  @media (max-width: 24.5em) {
    ${AppContainer} & {
      width: 65rem;
    }
  }

  @media (max-width: 23em) {
    ${AppContainer} & {
      width: 60rem;
    }
  }

  @media (max-width: 21em) {
    ${AppContainer} & {
      width: 55rem;
    }
  }

  @media (max-width: 19em) {
    ${AppContainer} & {
      width: 50rem;
    }
  }

  @media (max-width: 17em) {
    ${AppContainer} & {
      width: 45rem;
    }
  }

  @media (max-width: 15em) {
    ${AppContainer} & {
      width: 40rem;
    }
  }
  */
`;
