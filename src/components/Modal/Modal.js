import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: ${({ width }) => width || '500px'};
  height: ${({ height }) => height || '300px'};
  position: relative;
`;
const ModalHeader = styled.div`
  background: blue;
  padding: 20px;
  border-radius: 8px;
  width: ${({ width }) => width || '500px'};
  height: ${({ height }) => height || '30px'};
  position: relative;
 
`;


const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  margin-top: 20px;
`;

const Modal = ({ show, onClose, width, height, children }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer width={width} height={height}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalHeader>
          <h1>tile </h1>
        </ModalHeader>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;