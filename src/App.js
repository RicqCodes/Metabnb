import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyle/global.styled";

import { theme } from "./globalStyle/theme";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/HeroSection";
import Customers from "./components/Customer/CustomersSection";

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Hero />
        <Customers />
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
`;
