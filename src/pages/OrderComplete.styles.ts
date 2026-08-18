import styled from 'styled-components';

export const CompleteMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: calc(var(--tabbar-h) + 140px);
  background: #fff;
  padding: 0 20px calc(var(--tabbar-h) + 140px);
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const MessageBlock = styled.div`
  text-align: center;
  padding: 48px 0 32px;
`;

export const Title = styled.h2`
  font-family: var(--font-kr);
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
  letter-spacing: -0.01em;
`;

export const Subtitle = styled.p`
  font-family: var(--font-kr);
  font-size: 13px;
  font-weight: 400;
  color: #888;
  line-height: 1.6;
`;

export const Card = styled.div`
  border: 1px solid #d8d8d0;
  border-radius: 4px;
  padding: 0 20px;
  margin-bottom: 40px;
  background: #fff;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 0;
`;

export const Divider = styled.div`
  height: 1px;
  background: #e8e8e2;
  margin: 0;
`;

export const Label = styled.span`
  font-family: 'EB Garamond', var(--font-kr), sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #888;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Value = styled.span<{ isAmount?: boolean }>`
  font-family: 'EB Garamond', var(--font-kr), sans-serif;
  font-weight: ${props => props.isAmount ? '600' : '500'};
  font-size: ${props => props.isAmount ? '16px' : '13px'};
  color: #1a1a1a;
  letter-spacing: 0.02em;
`;

export const AddressBlock = styled.div`
  padding: 22px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AddressText = styled.p`
  font-family: var(--font-kr);
  font-size: 13px;
  font-weight: 400;
  color: #1a1a1a;
  line-height: 1.75;
  margin: 0;
`;

export const Actions = styled.div`
  position: fixed;
  bottom: var(--tabbar-h);
  left: 0;
  width: 100%;
  padding: 16px 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 100;
`;

export const ActionBtn = styled.button<{ outline?: boolean }>`
  width: 100%;
  height: 52px;
  font-family: var(--font-kr);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.03em;
  cursor: pointer;
  border-radius: 2px;
  transition: opacity 0.18s;
  
  background: ${props => props.outline ? '#fff' : '#1a1a1a'};
  color: ${props => props.outline ? '#1a1a1a' : '#fff'};
  border: 1.5px solid ${props => props.outline ? '#c8c8c0' : '#1a1a1a'};

  &:active {
    opacity: 0.8;
  }
`;
