import styled from 'styled-components';

export const ExchangeReturnMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: #fafaf9;
`;

export const Section = styled.div`
  padding: 32px 16px;
  background: #fff;
  margin-bottom: 8px;
`;

export const SectionTitle = styled.h3`
  font-family: 'EB Garamond', serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #111;
  margin-bottom: 24px;
`;

export const ProductBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProductImg = styled.div`
  width: 80px;
  height: 80px;
  background: #f0f0f0;
  
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

export const ProductName = styled.h4`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 6px;
`;

export const ProductOption = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0 0 12px;
`;

export const ProductPrice = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;

export const TypeSelect = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

export const TypeBtn = styled.button<{ active?: boolean }>`
  flex: 1;
  height: 48px;
  border: 1px solid ${props => props.active ? '#111' : '#e0e0e0'};
  background: ${props => props.active ? '#111' : '#fff'};
  color: ${props => props.active ? '#fff' : '#666'};
  font-size: 13px;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
`;

export const ReasonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  
  input {
    display: none;
  }
`;

export const RadioCustom = styled.span<{ checked?: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid ${props => props.checked ? '#111' : '#ccc'};
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background: #111;
    border-radius: 50%;
    display: ${props => props.checked ? 'block' : 'none'};
  }
`;

export const RadioText = styled.span`
  font-size: 13px;
  color: #333;
`;

export const RefundBox = styled.div`
  border: 1px solid #e0e0e0;
  padding: 20px;
`;

export const RefundRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RefundLabel = styled.span`
  font-size: 12px;
  color: #666;
`;

export const RefundValue = styled.span`
  font-size: 12px;
  color: #111;
  font-weight: 500;
`;

export const RefundDivider = styled.div`
  height: 1px;
  background: #f0f0f0;
  margin: 16px 0;
`;

export const RefundTotalRow = styled(RefundRow)`
  align-items: center;
  
  ${RefundLabel} {
    font-weight: 600;
    color: #111;
  }
  
  ${RefundValue} {
    font-family: 'EB Garamond', serif;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Actions = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fafaf9;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 52px;
  background: #111;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  width: 100%;
  height: 52px;
  background: #fff;
  color: #333;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid #111;
  cursor: pointer;
`;
