import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyle/global.styled";

import { theme } from "./globalStyle/theme";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/HeroSection";
import Customers from "./components/Customer/CustomersSection";
import AdventureSection from "./components/Adventure/AdventureSection";
import DiscoverSection from "./components/Discover/DiscoverSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Hero />
        <Customers />
        <AdventureSection />
        <DiscoverSection />
        <Footer />
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative;
  /* overflow-x: hidden; */
`;
