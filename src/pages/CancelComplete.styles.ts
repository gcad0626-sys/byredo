import styled from 'styled-components';

export const CompleteMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 40px 16px;
  background: #fafaf9;
  display: flex;
  flex-direction: column;
`;

export const MessageWrap = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-family: 'Inter', 'Noto Sans KR', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #111;
  margin-bottom: 16px;
`;

export const Desc = styled.p`
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin: 0;
  word-break: keep-all;
`;

export const InfoBox = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  padding: 24px 20px;
  margin-bottom: 40px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoLabel = styled.span`
  font-size: 12px;
  color: #666;
`;

export const InfoValue = styled.span`
  font-size: 13px;
  color: #111;
  font-family: 'Inter', sans-serif;
`;

export const AmountRow = styled(InfoRow)`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #eee;
  
  ${InfoValue} {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
`;

export const HomeBtn = styled.button`
  width: 100%;
  height: 52px;
  background: #1f1f1f;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

export const OrdersBtn = styled.button`
  width: 100%;
  height: 52px;
  background: #fff;
  color: #111;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #111;
  cursor: pointer;
`;
