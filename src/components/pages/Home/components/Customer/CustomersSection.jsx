import React from "react";
import styled from "styled-components";

import mbToken from "./assets/MBToken.svg";
import metamask from "./assets/metamask.svg";
import opensea from "./assets/opensea.svg";

const Customers = () => {
  return (
    <CustomerContainer>
      <IMGSRC>
        <img src={metamask} alt="metamask logo" />
        <img src={mbToken} alt="MB token logo" />
        <img src={opensea} alt="opensea logo" />
      </IMGSRC>
    </CustomerContainer>
  );
};

export default Customers;

const CustomerContainer = styled.div`
  width: 100vw;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  /* 

  @media (max-width: 37em) {
    gap: 20rem;
  }

  @media (max-width: 34rem) {
    gap: 16rem;
  }

  @media (max-width: 30em) {
    gap: 10rem;
  }

  @media (max-width: 24em) {
    gap: 8rem;
  }

  @media (max-width: 26em) {
    gap: 5rem;
    width: 95%;
  } */
`;

const IMGSRC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 10rem;
  gap: 28rem;

  @media (max-width: 61em) {
    padding: 1.5rem 5rem;
    justify-content: space-between;
    gap: 0;
  }

  img {
    width: 20rem;

    @media (max-width: 61em) {
      width: 15rem;
    }

    @media (max-width: 26em) {
      width: 10rem;
    }
  }
`;
