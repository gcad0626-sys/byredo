import styled from 'styled-components';

export const CartMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fafaf9;
  padding-bottom: 40px;
`;

export const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 16px;
  background: #fff;
`;

export const CartItem = styled.li`
  display: flex;
  padding: 24px 0;
  border-bottom: 1px solid #f0f0f0;
  gap: 16px;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const CartImg = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background: #f8f8f8;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CartInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CartHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CartName = styled.h3`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
`;

export const CartRemove = styled.button`
  color: #999;
  font-size: 16px;
  padding: 0 4px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const CartOptionSelect = styled.select`
  font-family: var(--font-kr);
  font-size: 13px;
  color: #888;
  margin-top: 4px;
  margin-bottom: 16px;
  border: 1px solid #e0e0e0;
  padding: 4px 8px;
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;
  appearance: auto;
  
  &:focus {
    outline: none;
    border-color: #1a1a1a;
  }
`;

export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartQty = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;

  button {
    width: 28px;
    height: 28px;
    font-size: 14px;
    color: #666;
    background: none;
    border: none;
    cursor: pointer;
  }

  span {
    width: 24px;
    text-align: center;
    font-size: 12px;
  }
`;

export const CartPrice = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 15px;
  font-weight: 500;
`;

export const CartGift = styled.div<{ added?: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 16px;
  color: ${props => props.added ? 'var(--color-ink)' : 'var(--color-ink-soft)'};

  span {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  p {
    font-size: 12px;
    font-style: italic;
    margin: 4px 0 0;
  }
`;

export const CartSummary = styled.div`
  background: #f7f7f5;
  margin: 24px 16px;
  padding: 24px;
  border-radius: 4px;
`;

export const SummaryTitle = styled.h3`
  font-family: var(--font-kr);
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 16px;
`;

export const SummaryList = styled.ul`
  list-style: none;
  margin: 0 0 16px;
  padding: 0 0 16px;
  border-bottom: 1px solid #e5e5e5;

  li {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }

    span:last-child {
      font-family: 'EB Garamond', serif;
    }
  }
`;

export const SummaryTotals = styled(SummaryList)`
  li span:last-child {
    font-family: 'EB Garamond', serif;
    font-size: 14px;
    color: #333;
    
    &.free-shipping {
      font-family: var(--font-kr) !important;
      font-size: 13px;
    }
  }
`;

export const SummaryFinal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 500;
  }

  strong {
    font-family: 'EB Garamond', serif;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const CartAction = styled.div`
  padding: 0 16px 40px;
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  background: #222;
  color: #fff;
  height: 52px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
