import React from "react";
import styled from "styled-components";

import AdventureCard from "./components/AdventureCard";
import { data } from "./adventureData";

const AdventureSection = () => {
  const nftData = data.map((nft, index) => {
    return <AdventureCard key={index} nftData={nft} />;
  });

  return (
    <AdventureContainer>
      <h1>Inspiration for your next adventure</h1>
      <MainContainer>{nftData}</MainContainer>
    </AdventureContainer>
  );
};

export default AdventureSection;

const AdventureContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5.8rem;
  text-align: center;
  width: 100%;

  h1 {
    font-size: 4.8rem;
    line-height: 59.95px;
  }
`;

const MainContainer = styled.div`
  grid-gap: 24px;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(4, 24%);
  justify-content: center;
  margin-top: 43px;
  width: min(1240px, 90%);

  @media (max-width: 72em) {
    grid-template-columns: repeat(3, 32%);
  }

  @media (max-width: 58em) {
    grid-gap: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 48%);
    margin-top: 43px;
    width: min(1240px, 90%);
  }

  @media (max-width: 58em) {
    grid-gap: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(1, 75%);
    margin-top: 43px;
    width: min(1240px, 90%);
  }

  @media (max-width: 58em) {
    grid-gap: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(1, 60%);
    margin-top: 43px;
    width: min(1240px, 90%);
  }

  @media (max-width: 34em) {
    grid-gap: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(1, 75%);
    margin-top: 43px;
    width: min(1240px, 90%);
  }

  @media (max-width: 27em) {
    grid-gap: 24px;
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(1, 90%);
    margin-top: 43px;
    width: min(1240px, 90%);
  }
`;
