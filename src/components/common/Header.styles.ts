import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: none;

  @media (min-width: 481px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-h-desktop);
    border-bottom: var(--box-line);
    background: #ffffff;
    z-index: 100;
  }
`;

export const HeaderInner = styled.div`
  max-width: var(--container-w);
  height: 100%;
  margin: 0;
  position: relative;
  left: 50vw;
  transform: translateX(-50%);
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  a {
    display: block;
  }
  img {
    height: 20px;
    width: auto;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }

  a {
    position: relative;
    font-family: var(--font-kr);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--color-ink-soft);
    text-decoration: none;
    opacity: 0.8;
    transition: color 0.25s ease, font-weight 0.25s ease, opacity 0.25s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0%;
      height: 1px;
      background-color: var(--color-ink);
      transition: width 0.3s ease;
    }

    &:hover, &.active {
      opacity: 1;
      color: var(--color-ink);
      
      &::after {
        width: 100%;
      }
    }

    &.active {
      font-weight: 700;
    }
  }
`;
