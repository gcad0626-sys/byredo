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

  select {
    font-size: 11px;
    color: #666;
    border: none;
    background: transparent;
    appearance: none;
    padding-right: 12px;
    
    &:focus {
      outline: none;
    }
  }

  &::after {
    content: "??;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 9px;
    color: #666;
    pointer-events: none;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 0 16px 40px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
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
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductBrand = styled.span`
  font-size: 9px;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 4px;
`;

export const ProductName = styled.h3`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 4px;
`;

export const ProductDesc = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0 0 8px;
`;

export const ProductPrice = styled.p`
  font-family: var(--font-kr);
  font-size: 15px;
  font-weight: 600;
  margin: 0;
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
