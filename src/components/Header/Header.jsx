import React from "react";
import styled from "styled-components";

import logo from "./assets/GroupMetabnb.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <NavBar>
        <Logo>
          <img src={logo} alt="MetaBnB Logo" />
        </Logo>
        <NavLink>
          <ul>
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
          </ul>
        </NavLink>
        <ConnectButton>Connect Wallet</ConnectButton>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  max-width: 124rem;
  padding-top: 3rem;
  display: flex;
  margin: 0 auto;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.div`
  width: 23.3rem;
  height: 3.7rem;

  img {
    width: 100%;
    height: 100%;
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
  }
`;

const ConnectButton = styled.button`
  font-family: inherit;
  padding: 1rem 2rem;
  background: none;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border: none;
  border-radius: 10px;
  color: #fff;
`;
