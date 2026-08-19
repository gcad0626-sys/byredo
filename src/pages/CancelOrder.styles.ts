import styled from 'styled-components';

export const CancelMain = styled.main`
  flex: 1;
  overflow-y: auto;
  background: #fafaf9;
`;

export const Section = styled.div`
  padding: 32px 16px;
  background: #fff;
  margin-bottom: 8px;
`;

export const SectionTitle = styled.h3`
  font-family: 'Inter', 'Noto Sans KR', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #666;
  margin-bottom: 16px;
  text-transform: uppercase;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
`;

export const SummaryBox = styled.div`
  display: flex;
  gap: 16px;
  background: #f9f9f9;
  padding: 16px;
`;

export const SummaryImg = styled.div`
  width: 70px;
  height: 70px;
  background: #fff;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SummaryName = styled.h4`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 4px;
`;

export const SummaryOption = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0 0 8px;
`;

export const SummaryPrice = styled.p`
  font-family: 'EB Garamond', serif;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`;

export const ReasonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
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
  width: 16px;
  height: 16px;
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
  font-size: 14px;
  color: #333;
`;

export const RefundBox = styled.div`
  padding: 8px 0;
`;

export const RefundRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const RefundLabel = styled.span`
  font-size: 13px;
  color: #666;
`;

export const RefundValue = styled.span`
  font-size: 13px;
  color: #111;
`;

export const RefundDivider = styled.div`
  height: 1px;
  background: #eee;
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
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Actions = styled.div`
  padding: 32px 16px calc(var(--tabbar-h) + 32px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #fafaf9;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 52px;
  background: #1f1f1f;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

export const BackBtn = styled.button`
  width: 100%;
  height: 48px;
  background: transparent;
  color: #666;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 2px;
`;
