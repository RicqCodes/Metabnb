import React, { Fragment } from "react";

import Header from "../../Header/Header";
import Hero from "./components/Hero/HeroSection";
import Customers from "./components/Customer/CustomersSection";
import AdventureSection from "../../Adventure/AdventureSection";
import DiscoverSection from "./components/Discover/DiscoverSection";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Customers />
      <AdventureSection />
      <DiscoverSection />
      <Footer />
    </Fragment>
  );
};

export default Home;
