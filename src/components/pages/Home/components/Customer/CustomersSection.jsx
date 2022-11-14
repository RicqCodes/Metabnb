import React from "react";
import styled from "styled-components";

import mbToken from "./assets/MBToken.svg";
import metamask from "./assets/metamask.svg";
import opensea from "./assets/opensea.svg";

const Customers = () => {
  return (
    <CustomerContainer>
      <img src={mbToken} alt="MB token logo" />
      <img src={metamask} alt="metamask logo" />
      <img src={opensea} alt="opensea logo" />
    </CustomerContainer>
  );
};

export default Customers;

const CustomerContainer = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 5rem;
  gap: 36.4rem;

  @media (max-width: 72em) {
    padding: 0 5rem;
    gap: 29rem;
  }

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
    width: 83%;
    justify-content: space-around;
  }

  img {
    width: 15rem;
    padding: 0.5rem 0;

    @media (max-width: 26em) {
      width: 8.5rem;
    }

    /* @media (max-width: 23em) {
      width: 10rem;
    } */
  }
`;
