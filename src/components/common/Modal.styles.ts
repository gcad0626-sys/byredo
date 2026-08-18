import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 80%;
  max-width: 320px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

export const ModalContent = styled.div`
  padding: 24px 20px;
  text-align: center;
  font-size: 15px;
  color: #111;
  line-height: 1.5;
  white-space: pre-wrap;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  border-top: 1px solid #eee;
`;

export const ModalButton = styled.button`
  flex: 1;
  background: none;
  border: none;
  padding: 16px;
  font-size: 15px;
  font-weight: 500;
  color: #111;
  cursor: pointer;
  
  &:active {
    background: #f9f9f9;
  }
`;
