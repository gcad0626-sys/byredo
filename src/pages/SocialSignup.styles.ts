import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fafaf9;
  padding: 40px 24px;
  overflow-y: auto;
  position: relative;
`;

export const Title = styled.h1`
  font-family: var(--font-kr);
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 12px;
  color: #111;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  padding: 8px;
`;

export const ProfileCard = styled.div<{ $provider?: string }>`
  background: ${props => props.$provider === 'google' ? '#f6f5f2' : '#fff'};
  border: ${props => props.$provider === 'google' ? 'none' : '1px solid #e5e5e5'};
  padding: ${props => props.$provider === 'google' ? '24px 32px' : '32px 20px'};
  display: flex;
  flex-direction: ${props => props.$provider === 'google' ? 'row' : 'column'};
  align-items: center;
  justify-content: ${props => props.$provider === 'google' ? 'flex-start' : 'center'};
  margin-bottom: 40px;
  border-radius: ${props => props.$provider === 'google' ? '4px' : '0'};
`;

export const Avatar = styled.div<{ $provider?: string }>`
  width: ${props => props.$provider === 'google' ? '48px' : '64px'};
  height: ${props => props.$provider === 'google' ? '48px' : '64px'};
  border-radius: 50%;
  background: ${props => props.$provider === 'google' ? '#e9e6df' : '#e8e8e8'};
  border: ${props => props.$provider === 'google' ? '2px solid #e0ddd5' : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.$provider === 'google' ? '0' : '16px'};
  margin-right: ${props => props.$provider === 'google' ? '20px' : '0'};
  color: #666;
  
  svg {
    width: ${props => props.$provider === 'google' ? '24px' : '32px'};
    height: ${props => props.$provider === 'google' ? '24px' : '32px'};
  }
`;

export const ProfileInfo = styled.div<{ $provider?: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.$provider === 'google' ? 'flex-start' : 'center'};
`;

export const ProfileName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #111;
  margin-bottom: 4px;
`;

export const ProfileEmail = styled.div`
  font-size: 13px;
  color: #666;
`;

export const TermsSection = styled.div`
  margin-bottom: 40px;
`;

export const TermAll = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid #111;
  margin-bottom: 16px;
  cursor: pointer;

  .check-box {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;

    &.checked {
      background: #111;
      border-color: #111;
      color: #fff;
    }
  }

  span {
    font-size: 16px;
    font-weight: 600;
    color: #111;
  }
`;

export const TermItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  cursor: pointer;

  .left {
    display: flex;
    align-items: center;
    gap: 12px;

    .check-icon {
      color: #ccc;
      &.checked {
        color: #111;
      }
    }

    span {
      font-size: 14px;
      color: #333;
    }
  }

  .arrow {
    color: #999;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: auto;
  padding: 14px 0;
  background: #222;
  color: #fff;
  font-size: 15px;
  letter-spacing: 0.05em;
  font-weight: 500;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin-top: auto;
  transition: opacity 0.2s;

  &:active {
    opacity: 0.8;
  }
`;
