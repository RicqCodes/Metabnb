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

  img {
    width: 15rem;
  }
`;
