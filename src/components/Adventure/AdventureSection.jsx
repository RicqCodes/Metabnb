import React from "react";
import styled from "styled-components";

const AdventureSection = () => {
  return (
    <AdventureContainer>
      <HeaderText>
        <h2>Inspiration for your next adventure</h2>
        <BoxContainer></BoxContainer>
      </HeaderText>
    </AdventureContainer>
  );
};

export default AdventureSection;

const AdventureContainer = styled.div`
  max-width: 122rem;
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
`;

const HeaderText = styled.div`
  text-align: center;

  h2 {
    color: #000;
    font-weight: 700;
    line-height: 5.9rem;
    font-size: 3.8rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
