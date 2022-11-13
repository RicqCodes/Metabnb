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
      <LeftContainer>
        <img src={logo} alt="" />
        <SocialLogo>
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
        </SocialLogo>
        <p>© {currentYear} Metabnb</p>
      </LeftContainer>
      <RightContainer>
        <Community>
          <h2>Community</h2>
          <ul>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </Community>
        <Places>
          <h2>Places</h2>
          <ul>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </Places>
        <AboutUs>
          <h2>About us</h2>
          <ul>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </AboutUs>
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 0 calc(100vw - 133.8rem);
  /* height: 2rem; */
  background: #1d1d1e;
  padding-top: 4rem;
  color: #fff;
  display: flex;
  gap: 24rem;

  @media (max-width: 80em) {
    padding: 5rem 7rem;
  }

  @media (max-width: 72em) {
    padding: 4rem 10rem;
  }

  @media (max-width: 30em) {
    gap: 12rem;
  }

  @media (max-width: 26em) {
    padding: 4rem;
    gap: 6rem;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  img {
    width: 18.8rem;
  }

  p {
    font-size: 1.3rem;
    margin-top: -1rem;
    font-weight: 400;
    line-height: 1.6rem;
    margin-bottom: 4rem;
  }
`;

const SocialLogo = styled.div`
  display: flex;
  width: 1.6rem;
  gap: 3rem;

  img {
    width: 100%;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 57%;
  align-self: flex-start;
`;

const Community = styled.div`
  h2 {
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li {
      font-size: 1.2rem;
      font-weight: 300;
    }
  }
`;

const Places = styled(Community)``;

const AboutUs = styled(Community)``;
