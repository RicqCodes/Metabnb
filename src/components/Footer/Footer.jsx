import React from "react";
import styled from "styled-components";

import logo from "./assets/logo.svg";
import fb from "./assets/fb.svg";
import insta from "./assets/insta.svg";
import twitter from "./assets/twitter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <LeftContainer>
          <img src={logo} alt="" />
          <SocialLogo>
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </SocialLogo>
          <p>© {currentYear} Metabnb</p>
        </LeftContainer>
        <Community>
          <ul>
            <p>Community</p>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </Community>
        <Places>
          <ul>
            <p>Places</p>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </Places>
        <AboutUs>
          <ul>
            <p>About us</p>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </AboutUs>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  align-items: center;
  background-color: #1d1d1e;
  display: flex;
  justify-content: center;
  min-height: 322px;
  width: 100%;

  @media (max-width: 37.2em) {
    padding: 6rem 0;
  }
`;

const FooterWrapper = styled.footer`
  display: grid;
  align-items: flex-start;
  display: grid;
  grid-template-columns: 2.2fr 1.2fr 1.2fr 1.2fr;
  width: min(1240px, 90%);

  @media (max-width: 37.2em) {
    gap: 6rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: space-between;
  color: #f7f7f7;
  font-size: 1.6rem;
  width: 23rem;

  @media (max-width: 37.2em) {
    font-size: 1.8rem;
    height: 22vh;
    width: 18rem;

    img {
      width: 100%;
    }
  }
`;

const SocialLogo = styled.div`
  display: flex;
  /* width: 1.9rem; */
  gap: 3.2rem;

  img {
    width: 1.8rem;
  }

  /* @media (max-width: 47.4em) {
    margin-left: -8rem;
  } */
`;

const Community = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.6rem;
    p {
      color: #fff;
      font-weight: 700;
      margin-bottom: 7px;
    }

    li {
      color: #fff;
      cursor: default;
      font-weight: 400;
      font-weight: 300;
      opacity: 85%;
      transition: 0.5s;
    }

    @media (max-width: 37.2em) {
      font-size: 1.8rem;
    }
  }
`;

const Places = styled(Community)``;

const AboutUs = styled(Community)``;
