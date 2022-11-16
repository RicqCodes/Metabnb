import React from "react";
import styled from "styled-components";

import image from "./assets/image.png";

const DiscoverSection = () => {
  return (
    <DiscoverContainer>
      <Wrapper>
        <TextContainer>
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </TextContainer>
        <ImageContainer>
          <img src={image} alt="" />
        </ImageContainer>
      </Wrapper>
    </DiscoverContainer>
  );
};

export default DiscoverSection;

const DiscoverContainer = styled.div`
  /* padding: 3rem 10rem;
  height: 77.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  border: 1px solid #000000;
  justify-content: space-between;
  gap: 7rem;
  align-items: center;
  color: #fff; */
  align-items: center;
  background-color: #a02279;
  color: #fff;
  display: flex;
  justify-content: center;
  margin-top: 53px;
  min-height: 100vh;
  padding: 20px 0;
  width: 100%;

  /* @media (max-width: 61em) {
    height: 50rem;
  } */

  /* @media (max-width: 28em) {
    height: 40rem;
    padding: 3rem;
  } */

  /* @media (max-width: 45em) {
    flex-direction: column;
  } */
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: min(1240px, 90%);

  @media (max-width: 46.5em) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 50%;

  button {
    border: none;
    border-radius: 8px;
    color: #a02279;
    color: var(--purple);
    height: 48px;
    width: 156px;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;
  }

  h2 {
    font-size: 4.8rem;
    margin: 0;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 35px;
    opacity: 95%;
    width: min(95%, 415px);
  }

  /* @media (max-width: 26rem) {
    align-items: center;
    gap: 3rem;
    width: 100%;
    h2 {
      font-size: 3.5rem;
    }

    p {
      text-align: center;
    }
  }

  @media (max-width: 20.6rem) {
    gap: 2.5rem;
    h2 {
      font-size: 2.8rem;
    }

    p {
      font-size: 1.6rem;
    }
  } */

  @media (max-width: 46em) {
    align-self: flex-start;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  /* width: 70.4rem;
  position: relative; */
  width: min(704px, 60%);

  @media (max-width: 46em) {
    width: 70%;
    align-self: flex-end;
  }
  @media (max-width: 30em) {
    width: 90%;
    align-self: center;
  }

  img {
    width: 100%;
  }
`;
