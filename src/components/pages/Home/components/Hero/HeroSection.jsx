import React from "react";
import styled from "styled-components";

import hero_img from "./assets/heroImage.png";

const Hero = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <TextContainer>
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </h1>
          <p>
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone.
          </p>

          <SearchInput>
            <form>
              <input placeholder="Search for location" />
              <button type="submit">Search</button>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                class="searchIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2 0-93.1-74.7-168.9-166.5-168.9C74.7 32 0 107.8 0 200.9s74.7 168.9 166.5 168.9c39.8 0 76.3-14.2 105-37.9l146 148.1 30.5-31zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71s128.1 58.3 128.1 129.9-57.4 129.9-128.1 129.9z"></path>
              </svg>
            </form>
          </SearchInput>
        </TextContainer>
        <ImageContainer>
          <img src={hero_img} alt="Hero" />
        </ImageContainer>
      </Wrapper>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: min(1240px, 90%);

  @media (max-width: 41em) {
    margin-top: 9rem;
    flex-direction: column-reverse;
  }

  @media (max-width: 31em) {
    margin-top: 4rem;
  }

  @media (max-width: 40em) {
    margin-top: 3rem;
  }

  @media (max-width: 30em) {
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  margin-top: 5rem;
  min-height: 100vh;

  @media (max-width: 72em) {
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: min(656px, 70%);

  h1 {
    margin: 0;
    color: #434343;
    font-size: 5.6rem;
    font-weight: 700;
    letter-spacing: -2%;
    line-height: 140%;

    span {
      font-weight: 700;
      color: #a02279;
    }
  }

  p {
    margin: 0;
    color: #434343;
    font-size: 2.4rem;
    line-height: 3.5rem;
  }

  @media (max-width: 72em) {
    align-items: center;
    gap: 40px;
    width: min(750px, 90%);
  }

  @media (max-width: 30em) {
    h1 {
      font-size: 4rem;
      line-height: 120%;
    }

    p {
      font-size: 1.6rem;
      line-height: 3rem;
    }
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
  }

  @media (max-width: 72rem) {
    display: none;
  }
`;

const SearchInput = styled.div`
  display: flex;

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
      border: 1px solid #a3a3a3;
      border-radius: 8px 0 0 8px;
      border-right: none;
      font-size: 14px;
      line-height: 130%;
      padding: 1.8rem 1.5rem;
      width: 80%;

      @media (max-width: 72em) {
        width: 80%;
        /* padding-top: 16px; */
      }

      ::placeholder {
        color: #b8b8b8;
        font-size: 1.4rem;
      }

      :focus {
        outline: none;
      }
    }

    button {
      cursor: pointer;
      background-color: #a02279;
      border-radius: 0 8px 8px 0;
      color: #fff;
      border: none;
      padding: 2rem 7.7rem;

      @media (max-width: 42.7em) {
        display: none;
      }
    }
  }

  @media (max-width: 72em) {
    width: 100%;
  }

  .searchIcon {
    display: none;
    font-size: 1rem;
    height: 100%;
    padding: 0 1.2rem;
    width: 4rem;
    background-color: #a02279;
    border-radius: 0 8px 8px 0;
    color: #fff;

    @media (max-width: 42.7em) {
      display: block;
      height: 100%;
    }

    @media (max-width: 41em) {
      height: 6.35rem;
    }
  }

  @media (max-width: 30em) {
    width: 100%;
  }
`;
