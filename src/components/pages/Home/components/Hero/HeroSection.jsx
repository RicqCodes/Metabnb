import React from "react";
import styled from "styled-components";

import hero_img from "./assets/heroImage.svg";

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
  max-width: 122rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15rem auto;
  /* height: 100vh; */
  @media (max-width: 72em) {
    padding: 0 5rem;
  }

  @media (max-width: 40em) {
    margin-top: 8rem;
  }

  @media (max-width: 34em) {
    margin-top: 9rem;
    flex-direction: column-reverse;
    gap: 4rem;
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
      /* color: linear-gradient(90deg, #a02279 100%, #ffc089 60%); */
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

  @media (max-width: 72em) {
    width: 54rem;
    font-size: 3rem;
    line-height: 6.84rem;

    p {
      font-size: 2rem;
      max-width: 54.5rem;
    }
  }

  @media (max-width: 45em) {
    gap: 4rem;
  }

  @media (max-width: 40rem) {
    font-size: 3.2rem;
    width: 100%;

    gap: 2.5rem;

    p {
      width: 90%;
      font-size: 1.9rem;
      line-height: 3rem;
    }
  }

  @media (max-width: 34rem) {
    text-align: center;
    max-width: 58rem;

    p {
      margin-left: 3rem;
      width: 70rem;
      font-size: 2.1rem;
      text-align: left;
    }
  }

  @media (max-width: 26em) {
    font-size: 2.4rem;
    line-height: 3.5rem;
    width: 39rem;

    p {
      width: 38rem;
      font-size: 1.9rem;
      line-height: 2rem;
      text-align: left;
      margin-left: 0;
    }
  }

  /* @media (max-width: 23em) {
    font-size: 1.7rem;
    line-height: 3rem;

    h2 {
      font-size: 3.8rem;
    }

    p {
      margin-left: 1rem;
      width: 42rem;
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: center;
      margin-left: 4rem;
    }
  } */
`;

const ImageContainer = styled.div`
  max-width: 47.6rem;

  img {
    width: 100%;
  }

  @media (max-width: 72em) {
    max-width: 44rem;
  }

  @media (max-width: 41em) {
    max-width: 62rem;
  }

  @media (max-width: 26em) {
    max-width: 40rem;
  }
`;

const SearchInput = styled.div`
  max-width: 61.8rem;

  form {
    width: 100%;
    display: flex;
    align-items: center;

    input {
      width: 70%;
      height: 4.5rem;
      padding-left: 0.8rem;
      background: rgba(247, 247, 247, 0.1);
      border: 1px solid #a3a3a3;
      border-radius: 8px 0px 0px 8px;

      ::placeholder {
        color: #b8b8b8;
        font-size: 1.6rem;
      }

      @media (max-width: 72em) {
        max-width: 50.5rem;
      }
    }
    @media (max-width: 40em) {
      max-width: 85%;
    }

    @media (max-width: 34rem) {
      max-width: 100%;

      input {
        height: 5.5rem;
      }
    }

    @media (max-width: 23em) {
      input {
        height: 4rem;
      }
    }

    button {
      border: none;
      background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.46%);
      color: #fff;
      /* padding: 1.5rem 8rem; */
      width: 30%;
      height: 4.5rem;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      border-radius: 0px 8px 8px 0px;
      cursor: pointer;

      @media (max-width: 34rem) {
        max-width: 100%;

        /* button { */
        height: 5.5rem;
        /* } */
      }

      @media (max-width: 23em) {
        height: 4rem;
      }
    }
  }
`;
