import React from "react";
import styled from "styled-components";

import AdventureCard from "../../../Home/Adventure/components/AdventureCard";
import { data } from "./NFTData";

const NFTList = () => {
  const nftData = data.map((nft, index) => {
    return <AdventureCard key={index} nftData={nft} />;
  });

  return (
    <NFTContainer>
      <MainContainer>{nftData}</MainContainer>
    </NFTContainer>
  );
};

export default NFTList;

const NFTContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: 2rem; */
  text-align: center;

  @media (max-width: 72rem) {
    width: 100%;
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
