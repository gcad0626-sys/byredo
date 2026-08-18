import styled from 'styled-components';

export const ProductListMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fafaf9;
`;

export const ProductListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 16px;
`;

export const HeaderTitle = styled.h2`
  font-family: 'EB Garamond', serif;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`;

export const HeaderSort = styled.div`
  position: relative;
  transform: translateX(4px);
  display: flex;
  align-items: center;

  select {
    font-size: 12px;
    color: #666;
    border: none;
    background: transparent;
    appearance: none;
    padding-right: 10px;
    font-weight: 500;
    text-align: right;
    
    &:focus {
      outline: none;
    }
  }

  &::after {
    content: "⌄";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-65%);
    font-size: 14px;
    color: #666;
    pointer-events: none;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0 16px 16px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  height: 100%;
`;

export const ProductBadge = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0, 0, 0, 0.1);
  color: #111;
  font-size: 10px;
  font-weight: 700;
  padding: 4px 6px;
  z-index: 1;
`;

export const ProductImgWrap = styled.div`
  width: 100%;
  aspect-ratio: 4 / 5;
  background: #f0f0f0;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProductBrand = styled.span`
  font-size: 10px;
  letter-spacing: 0.5px;
  color: #333;
  margin-bottom: 6px;
  font-weight: 600;
`;

export const ProductName = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #111;
  margin: 0 0 6px;
  text-transform: uppercase;
`;

export const ProductDesc = styled.p`
  font-size: 13px;
  color: #555;
  margin: 0 0 12px;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #111;
  margin: auto 0 0;
`;

export const WishBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  z-index: 2;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartBtn = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  color: #111;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: opacity 0.2s;
  
  &:active {
    opacity: 0.7;
  }
`;
