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
      <Container>
        <h2>Inspiration for your next adventure</h2>
        <BoxContainer>{nftData}</BoxContainer>
      </Container>
    </AdventureContainer>
  );
};

export default AdventureSection;

const AdventureContainer = styled.div`
  max-width: 122rem;
  display: flex;
  flex-direction: column;
  margin: 4rem auto;

  @media (max-width: 72em) {
    padding: 0 5rem;
  }
`;

const Container = styled.div`
  text-align: center;

  h2 {
    color: #000;
    font-weight: 700;
    line-height: 5.9rem;
    font-size: 3.8rem;
  }

  @media (max-width: 26em) {
    h2 {
      font-size: 3.3rem;
    }
  }

  @media (max-width: 24em) {
    h2 {
      font-size: 3rem;
    }
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 72em) {
    /* flex-wrap: nowrap; */
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 46.6em) {
    column-gap: 5rem;
  }
`;
