import React from "react";
import styled from "styled-components";

import rating from "../assets/rating.svg";

const AdventureCard = ({ nftData }) => {
  return (
    <CardContainer>
      <Image>
        <img src={nftData.image} alt="NFT" />
        <img src={nftData.like} alt="Likes" />
      </Image>
      <TextContainer>
        <Text>
          <p>{nftData.name}</p>
          <p className="price">{nftData.price}</p>
        </Text>
        <Text>
          <p>{nftData.distance}</p>
          <p>{nftData.availability}</p>
        </Text>
        <img src={rating} alt="rating" />
      </TextContainer>
    </CardContainer>
  );
};

export default AdventureCard;

const CardContainer = styled.div`
  width: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

const Image = styled.div`
  width: 100%;
  position: relative;

  img {
    border-radius: 1.5rem;
    width: 100%;
  }

  img:nth-child(1) {
    height: 100%;

    @media (max-width: 58em) {
      width: 100%;
      height: 100%;
    }
  }

  img:nth-child(2) {
    position: absolute;
    width: 4rem;
    top: 1rem;
    right: 0.7rem;

    @media (max-width: 72em) {
      width: 3rem;
    }
  }
`;

const TextContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .price {
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    margin: 0;
  }
`;
