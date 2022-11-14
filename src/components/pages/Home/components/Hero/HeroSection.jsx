import React from "react";
import styled from "styled-components";

import hero_img from "./assets/heroImage.png";

const Hero = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <h2>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h2>
        <p>
          We provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>

        <SearchInput>
          <form>
            <input placeholder="Search for location" />
            <button type="submit">Search</button>
          </form>
        </SearchInput>
      </TextContainer>
      <ImageContainer>
        <img src={hero_img} alt="Hero" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  padding: 0 10rem;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
  margin: 15rem auto;

  @media (max-width: 41em) {
    margin-top: 9rem;
    flex-direction: column-reverse;
  }
`;

const TextContainer = styled.div`
  font-size: 3.6rem;
  font-weight: 400;
  line-height: 7.84rem;
  width: 64.6rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  h2 {
    margin: 0;
    color: #434343;

    span {
      font-weight: 700;
      color: #a02279;
    }
  }

  p {
    margin: 0;
    font-size: 2.4rem;
    font-weight: 400;
    font-style: normal;
    line-height: 3.5rem;
    color: #434343;
  }

  @media (max-width: 82em) {
    font-size: 3rem;
    line-height: 6rem;

    p {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  @media (max-width: 41em) {
    width: 100%;

    font-size: 4rem;
    text-align: center;
    line-height: 5.4rem;

    p {
      font-size: 1.8rem;
      line-height: 2.8rem;
    }
  }

  @media (max-width: 26em) {
    gap: 2.5rem;
    font-size: 2.5rem;
    line-height: 4rem;

    p {
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
  }

  @media (max-width: 19em) {
    gap: 2rem;
    font-size: 1.8rem;
    line-height: 3.5rem;

    p {
      font-size: 1.2rem;
      line-height: 2.4rem;
    }
  }
`;

const ImageContainer = styled.div`
  /* width: 47.6rem; */

  img {
    width: 100%;
  }

  @media (max-width: 41em) {
    width: 67rem;
  }

  @media (max-width: 31em) {
    width: 55rem;
  }

  @media (max-width: 24em) {
    width: 45rem;
  }

  @media (max-width: 19em) {
    width: 35rem;
  }
`;

const SearchInput = styled.div`
  display: flex;
  width: 80%;

  @media (max-width: 40em) {
    width: 100%;
    align-items: center;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      width: 70%;
      height: 5rem;
      background: rgba(247, 247, 247, 0.1);
      border: 1px solid #a3a3a3;
      border-radius: 8px 0px 0px 8px;
      font-size: 1.8rem;
      padding-left: 2rem;

      ::placeholder {
        color: #b8b8b8;
        font-size: 1.4rem;
      }

      :focus {
        outline: none;
      }
    }

    button {
      border: none;
      background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.46%);
      color: #fff;
      height: 5rem;
      width: 30%;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      border-radius: 0px 8px 8px 0px;
      cursor: pointer;
    }

    @media (max-width: 61em) {
      /* width: 100%; */
    }
  }
`;
