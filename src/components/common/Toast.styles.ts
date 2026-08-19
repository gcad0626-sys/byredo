import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 10px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 0;
    transform: translate(-50%, 10px);
  }
`;

export const ToastContainer = styled.div<{ $isLeaving: boolean }>`
  position: fixed;
  bottom: calc(var(--tabbar-h, 60px) + 20px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  min-width: 260px;
  max-width: 320px;
  height: 48px;
  background-color: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  pointer-events: none;
  
  animation: ${props => props.$isLeaving ? slideOut : slideIn} 0.3s ease forwards;
`;

export const ToastIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1A1A1A;
`;

export const ToastMessage = styled.span`
  color: #1A1A1A;
  font-size: 13px;
  font-weight: 500;
  font-family: var(--font-kr);
`;
