import React from "react";
import styled from "styled-components";

const Modal = () => {
  return (
    <ModalContainer>
      <Centered>
        <ContentContainer>
          <Heading>
            <h2>Connect Wallet</h2>
            <img src="" alt="" />
          </Heading>
        </ContentContainer>
      </Centered>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
`;

const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentContainer = styled.div`
  padding: 1rem 2rem;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
