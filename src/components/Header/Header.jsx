import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

import NavBuger from "../NavBuger";
import logo from "./assets/GroupMetabnb.svg";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navButton, setNavButton] = useState(false);
  return (
    <HeaderContainer>
      <NavBar>
        <Logo>
          <Link to="/">
            <img
              onClick={() => setIsModalOpen(false)}
              src={logo}
              alt="MetaBnB Logo"
            />
          </Link>
        </Logo>
        <NavLink>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Place to stay</Link>
            </li>
            <li>
              <Link to="/nfts">NFTs</Link>
            </li>
            <li>
              <Link to="/">Community</Link>
            </li>
          </ul>
        </NavLink>
        {navButton && (
          <NavBuger
            setIsModalOpen={setIsModalOpen}
            setNavButton={setNavButton}
          />
        )}
        <ConnectButton
          aria-label="connect"
          onClick={() => setIsModalOpen(true)}
        >
          Connect Wallet
        </ConnectButton>
        <NavButton
          data-check={navButton}
          onClick={() => setNavButton(!navButton)}
          className={navButton ? "open" : "close"}
        >
          <HamBox>
            <HamBoxInner className="test"></HamBoxInner>
          </HamBox>
        </NavButton>
      </NavBar>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  /* max-width: 124rem; */
  padding: 3rem 10rem;
  height: 10rem;
  background-color: #fff;
  display: flex;
  margin: 0 auto;

  @media (max-width: 61em) {
    padding: 3rem 5rem;
  }

  @media (max-width: 28em) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  cursor: pointer;
  width: 23.3rem;

  img {
    width: 100%;
  }

  @media (max-width: 28em) {
    width: 13rem;
  }
`;

const NavLink = styled.div`
  font-size: 2rem;
  color: linear-gradient(
    90deg,
    ${({ theme }) => theme.textColors.primaryTextColor} 11.45%,
    ${({ theme }) => theme.textColors.primaryTextColor} 11.45%
  );

  ul {
    display: flex;
    gap: 4.8rem;

    li {
      cursor: pointer;

      a {
        text-decoration: none;
        color: inherit;
      }

      @media (hover: hover) and (any-pointer: fine) {
        &:hover {
          color: ${({ theme }) => theme.colors.primaryColor};
        }
      }

      @media (hover: hover) and (any-pointer: coarse) {
        &:hover {
          color: ${({ theme }) => theme.colors.primaryColor};
        }
      }
    }
  }

  @media (max-width: 41em) {
    display: none;
  }
`;

const ConnectButton = styled.button`
  font-family: inherit;
  font-size: 1.8rem;
  padding: 1rem 2rem;
  background: none;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  @media (max-width: 41em) {
    display: none;
  }
`;

const NavButton = styled.button`
  display: none;
  font-size: 2.4rem;
  z-index: 999;

  @media (max-width: 41em) {
    display: block;
    background-color: transparent;
    /* position: fixed; */
    border: none;

    .open,
    .close {
      display: flex;
      z-index: 10;
      color: inherit;
      text-transform: none;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border: 0;
      justify-content: center;
      align-items: center;
      margin-right: -15px;
      padding: 15px;
      transition-property: opacity, filter;
      transition-duration: 0.15s;
      transition-timing-function: linear;
      position: relative;
    }

    &[data-check="true"] {
      position: fixed;
      right: 3rem;
    }

    &[data-check="false"] {
      position: relative;
    }
  }
`;

const HamBox = styled.div`
  ${NavButton}.close &, ${NavButton}.open & {
    width: 3rem;
    height: 2.4rem;
    display: inline-block;
    position: relative;
  }
`;

const HamBoxInner = styled.div`
  ${NavButton}.close & {
    width: 4rem;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 2px;
    transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    position: absolute;
    top: 50%;
    right: 0;
    transform: rotate(0deg);

    &::before,
    &::after {
      content: "";
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      display: block;
      position: absolute;
      left: auto;
      right: 0;
    }

    &:before {
      width: 120%;
      opacity: 1;
      transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
      top: -10px;
    }

    &:after {
      width: 80%;
      transition: bottom 0.1s ease-in 0.25s, transform 0.22s;
      bottom: -10px;
      transform: rotate(0deg);
    }

    @media (max-width: 24.5em) {
      &:before {
        top: -7px;
      }
      &:after {
        bottom: -7px;
      }
    }
  }

  /* THIS STYLE HAPPENS WHEN THE HAMBOX IS OPENED */

  ${NavButton}.open & {
    width: 4rem;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 4px;
    transition: transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
    position: absolute;
    top: 50%;
    right: 0;
    transform: rotate(225deg);

    &::before,
    &::after {
      content: "";
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 4px;
      display: block;
      position: absolute;
      left: auto;
      right: 0;
    }

    &::before {
      width: 100%;
      opacity: 0;
      transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
      top: 0;
    }

    &::after {
      width: 100%;
      transition: bottom 0.1s ease-out,
        transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
      bottom: 0;
      transform: rotate(-90deg);
    }
  }
`;
