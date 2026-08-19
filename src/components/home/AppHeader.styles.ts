import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  flex: 0 0 var(--header-h-app);
  height: var(--header-h-app);
  border-bottom: var(--box-line);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  background: #ffffff;
  z-index: 10;

  @media (min-width: 481px) {
    position: static;
    width: auto;
  }
`;

export const IconButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &.trigger-cart {
    /* app-header__icon-btn--cart */
    position: relative;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  img {
    height: 15px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--color-ink);
  color: #ffffff;
  font-family: var(--font-kr);
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.is-popping {
    animation: badgePop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  @keyframes badgePop {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }
`;
