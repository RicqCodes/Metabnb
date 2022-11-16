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
        <LeftText>
          <p>{nftData.name}</p>
          <p>{nftData.distance}</p>
          <img src={rating} alt="rating" />
        </LeftText>
        <RightText>
          <p>{nftData.price}</p>
          <p>{nftData.availability}</p>
        </RightText>
      </TextContainer>
    </CardContainer>
  );
};

export default AdventureCard;

const CardContainer = styled.div`
  width: 29.2rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
  border: 1px solid #d7d7d7;
  border-radius: 15px;
  cursor: pointer;

  @media (max-width: 72em) {
    /* flex-wrap: nowrap; */
    width: 23rem;
  }
  @media (max-width: 53.5em) {
    /* flex-wrap: nowrap; */
    width: 21rem;
  }

  @media (max-width: 49.2em) {
    /* flex-wrap: nowrap; */
    width: 20rem;
  }

  @media (max-width: 48.01em) {
    /* flex-wrap: nowrap; */
    width: 32rem;
  }

  @media (max-width: 33.9em) {
    width: 27rem;
  }

  @media (max-width: 30em) {
    width: 35rem;
  }
`;

const Image = styled.div`
  position: relative;

  img {
    border-radius: 2.5rem;
    width: 100%;
    padding: 1rem;
  }

  img:nth-child(2) {
    position: absolute;
    width: 4rem;
    top: 1rem;
    right: 0.7rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem 1rem;
`;

const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;

  img {
    padding: 0;
  }

  p {
    font-size: 1.2rem;
    margin: 0;
  }

  @media (max-width: 46.6em) {
    width: 40%;
  }

  @media (max-width: 30em) {
    p {
      font-size: 1.8rem;
    }
  }
`;

const RightText = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-self: flex-start;

  p {
    font-size: 1.2rem;
    margin: 0;
  }

  p:first-child {
    font-weight: 700;
  }

  @media (max-width: 30em) {
    p {
      font-size: 1.8rem;
    }
  }
`;
