import React, { Fragment } from "react";

import Header from "../../Header/Header";
import NftNav from "./components/NftNav/NftNav";
import NFTList from "./components/NFTList/NFTList";
import Footer from "../../Footer/Footer";

const NFTS = () => {
  return (
    <Fragment>
      <Header />
      <NftNav />
      <NFTList />
      <Footer />
    </Fragment>
  );
};

export default NFTS;
