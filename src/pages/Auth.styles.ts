import styled from 'styled-components';

export const AuthMain = styled.main`
  flex: 1;
  overflow-y: auto;
  background: #fafaf9;
  padding: 40px 24px calc(var(--tabbar-h) + 40px);
`;

export const AuthTitle = styled.h2`
  font-family: var(--font-kr);
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: 0.02em;
`;

export const AuthSubtitle = styled.p`
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-top: -24px;
  margin-bottom: 40px;
`;

export const AuthFormRow = styled.div`
  margin-bottom: 24px;

  label {
    display: block;
    font-size: 11px;
    color: #666;
    margin-bottom: 8px;
  }

  input[type="email"],
  input[type="password"],
  input[type="text"] {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #333;
    background: transparent;
    font-size: 14px;
    color: #333;
    padding: 0 0 8px 0;
    border-radius: 0;
    outline: none;

    &::placeholder {
      color: #aaa;
    }
  }
`;

export const AuthBtn = styled.button<{ variant?: 'submit' | 'google' | 'kakao' | 'apple' }>`
  width: 100%;
  height: 52px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  cursor: pointer;
  border-radius: 2px;
  transition: opacity 0.2s;

  &:active {
    opacity: 0.8;
  }

  ${props => props.variant === 'submit' && `
    background: #222;
    color: #fff;
    border: none;
    margin-top: 32px;
    font-size: 13px;
    letter-spacing: 0.08em;
  `}

  ${props => props.variant === 'google' && `
    background: #fff;
    color: #222;
    border: 1px solid #ddd;
    font-size: 13px;
  `}

  ${props => props.variant === 'kakao' && `
    background: #FEE500;
    color: #191919;
    border: none;
    font-size: 13px;
  `}

  ${props => props.variant === 'apple' && `
    background: #000000;
    color: #ffffff;
    border: none;
    font-size: 13px;
  `}
`;

export const AuthDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 0 4px;
  color: #999;
  font-size: 12px;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e0e0e0;
  }
`;

export const AuthLinks = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const AuthLink = styled.a<{ strong?: boolean }>`
  font-size: ${props => props.strong ? '18px' : '13px'};
  font-family: ${props => props.strong ? 'var(--font-kr)' : 'inherit'};
  font-weight: ${props => props.strong ? '500' : 'inherit'};
  letter-spacing: ${props => props.strong ? '0.02em' : 'inherit'};
  color: ${props => props.strong ? '#111' : '#333'};
  text-decoration: none;
  cursor: pointer;
`;

export const AuthLinksBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const AuthText = styled.span`
  font-size: 13px;
  color: #666;
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
  z-index: 100;
`;

export const AuthFormAgree = styled.div`
  margin-top: 32px;

  u {
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
