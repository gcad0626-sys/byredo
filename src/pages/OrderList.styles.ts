import styled from 'styled-components';

export const OrderListMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fafaf9;
  padding: 24px 20px;
  padding-bottom: var(--tabbar-h);
`;

export const OlCard = styled.div`
  margin-bottom: 24px;
`;

export const DeleteOrderBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;
