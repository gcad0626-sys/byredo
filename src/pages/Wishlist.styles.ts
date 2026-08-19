import styled from 'styled-components';

export const WishlistMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: calc(var(--tabbar-h) + 100px);
  background: #fafaf9;
  display: flex;
  flex-direction: column;
`;

export const WishlistHeader = styled.div`
  text-align: center;
  padding: 40px 16px 24px;
`;

export const Title = styled.h2`
  font-family: 'EB Garamond', serif;
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 8px;
`;

export const Count = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
`;

export const ActionBottom = styled.div`
  position: fixed;
  bottom: var(--tabbar-h);
  left: 0;
  width: 100%;
  padding: 16px;
  background: #fafaf9;
  z-index: 10;
  margin-top: auto;
`;

export const AddAllBtn = styled.button`
  width: 100%;
  height: 52px;
  background: #111;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  color: #fff;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.4));
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;
