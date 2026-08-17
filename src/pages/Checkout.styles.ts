import styled from 'styled-components';

export const CheckoutMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fff;
  padding-bottom: 40px;
`;

export const CheckoutSection = styled.div`
  padding: 24px 16px 0;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
`;

export const CheckoutForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }

  label {
    display: block;
    font-size: 11px;
    color: #666;
    margin-bottom: 6px;
  }

  input[type="text"] {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #333;
    font-size: 13px;
    font-family: inherit;
    background: transparent;
    color: #333;
    padding: 0;

    &::placeholder {
      color: #aaa;
    }

    &[readonly] {
      color: #333;
    }
  }
`;

export const FormZip = styled.div`
  display: flex;
  gap: 8px;

  input {
    flex: 1;
    background: #f7f7f5 !important;
    border: none !important;
    padding: 0 12px !important;
  }

  button {
    width: 100px;
    height: 40px;
    border: 1px solid #333;
    background: #fff;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const FormSelect = styled.div`
  position: relative;

  select {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #333;
    appearance: none;
    font-size: 13px;
    background: transparent;
    border-radius: 0;
    color: #333;
  }

  &::after {
    content: "??;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: #666;
    pointer-events: none;
  }
`;

export const CheckoutProduct = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ProductImg = styled.div`
  width: 80px;
  height: 80px;
  background: #f7f7f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  position: relative;
`;

export const ProductCate = styled.span`
  font-size: 9px;
  letter-spacing: 1px;
  color: #666;
  display: block;
`;

export const ProductName = styled.h4`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 2px;
`;

export const ProductOption = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 6px;
`;

export const ProductPrice = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const CheckoutSummary = styled.div`
  background: #f7f7f5;
  padding: 20px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 12px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 12px;
  }

  li {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: 600;
  }

  strong {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const PayTabs = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;

  button {
    flex: 1;
    height: 48px;
    border: 1px solid #e0e0e0;
    background: #f7f7f5;
    font-size: 13px;
    color: #666;

    &.is-active {
      border: 1px solid #333;
      background: #fff;
      color: #333;
      font-weight: 600;
    }
  }
`;

export const PayBox = styled.div`
  background: #f7f7f5;
  padding: 20px;
`;

export const CheckoutAgree = styled.div`
  padding: 24px 16px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;

  input[type="checkbox"] {
    margin-top: 2px;
  }

  span {
    font-size: 12px;
    color: #333;
    line-height: 1.5;
  }
`;

export const CheckoutAction = styled.div`
  padding: 0 16px;
  
  button {
    width: 100%;
    background: #222;
    color: #fff;
    height: 52px;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
