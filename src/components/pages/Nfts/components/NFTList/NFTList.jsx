import React from "react";
import styled from "styled-components";

import AdventureCard from "../../../../Adventure/components/AdventureCard";
import { data } from "./NFTData";

const NFTList = () => {
  const nftData = data.map((nft, index) => {
    return <AdventureCard key={index} nftData={nft} />;
  });

  return (
    <NFTContainer>
      <BoxContainer>{nftData}</BoxContainer>
    </NFTContainer>
  );
};

export default NFTList;

const NFTContainer = styled.div`
  max-width: 122rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto 8rem;

  @media (max-width: 72em) {
    padding: 0 5rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 72em) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 46.6em) {
    column-gap: 5rem;
  }
`;
