import React from "react";
import styled from "styled-components";

import image from "./assets/image.svg";

const DiscoverSection = () => {
  return (
    <DiscoverContainer>
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
    </DiscoverContainer>
  );
};

export default DiscoverSection;

const DiscoverContainer = styled.div`
  width: 100%;
  padding: 1rem 10rem;
  height: 77.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  border: 1px solid #000000;
  justify-content: space-between;
  gap: 7rem;
  align-items: center;
  color: #fff;

  @media (max-width: 72em) {
    padding: 0 5rem;
  }

  @media (max-width: 34rem) {
    gap: 2rem;

    height: 50rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45rem;
  gap: 5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 4rem;
    font-family: inherit;
    font-size: 1.6rem;
    border: none;
    background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.primaryColor};
    cursor: pointer;

    @media (max-width: 63em) {
      width: 40%;
    }

    @media (max-width: 34rem) {
      width: 45%;
    }
  }

  h2 {
    font-size: 4.8rem;
    margin: 0;
  }

  p {
    margin: 0;
    background: linear-gradient(124.4deg, #ffffff 10.8%, #ffffff 87.34%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 3.5rem;
    -text-fill-color: transparent;
  }

  @media (max-width: 34rem) {
    width: 60rem;
    gap: 3rem;

    h2 {
      font-size: 4rem;
    }
  }

  @media (max-width: 26em) {
    h2 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 23em) {
    font-size: 2.2rem;

    p {
      margin-left: 1rem;
      width: 40rem;
    }
  }

  @media (max-width: 23em) {
    p {
      width: 29rem;
    }
  }
`;

const ImageContainer = styled.div`
  width: 70.4rem;
  position: relative;

  img {
    width: 100%;
    left: 0rem;
    bottom: 9.5rem;
    z-index: 2;
  }

  @media (max-width: 23em) {
    display: hidden;
  }
`;
