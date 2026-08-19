import styled from 'styled-components';

export const Overlay = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fafaf9;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;
`;

export const Title = styled.span`
  font-family: var(--font-family);
  font-size: 20px;
  letter-spacing: 0.1em;
  font-weight: 500;
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: var(--color-ink);
  cursor: pointer;
  padding: 0;
  font-weight: 300;
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 40px 0 0;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;

  a {
    display: inline-flex;
    align-items: center;
    gap: 16px;
    font-family: var(--font-family);
    font-size: 18px;
    color: var(--color-ink);
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.25s ease;
    width: fit-content;

    span {
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 0%;
        height: 1px;
        background-color: var(--color-ink);
        transition: width 0.3s ease;
      }
    }

    &:hover {
      opacity: 1;
      span::after {
        width: 100%;
      }
    }
  }
`;

export const MenuIcon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

export const Footer = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const LoginLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-family);
  font-size: 14px;
  color: var(--color-ink-soft);
  text-decoration: none;
  border-bottom: 1px solid #e3e3de;
  padding-bottom: 24px;

  .arrow {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const LogoWrapper = styled.div`
  text-align: center;
  padding-bottom: 30px;

  img {
    height: 14px;
    object-fit: contain;
  }
`;
