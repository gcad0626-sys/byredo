import styled from 'styled-components';

export const TabBarNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  flex: 0 0 var(--tabbar-h);
  height: var(--tabbar-h);
  border-top: var(--box-line);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #ffffff;
  z-index: 50;

  @media (min-width: 481px) {
    position: absolute;
    display: grid;
    flex: 0 0 auto;
  }
`;

export const TabItem = styled.a<{ isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-height: 44px;
  min-width: 44px;
  font-family: var(--font-kr);
  font-size: clamp(0.55rem, 1vw + 0.3rem, 0.7rem);
  color: ${props => props.isActive ? 'var(--color-ink)' : '#a3a199'};
  font-weight: ${props => props.isActive ? '700' : '400'};
  opacity: ${props => props.isActive ? '1' : '1'};

  img {
    width: 18px;
    height: 18px;
  }
`;
