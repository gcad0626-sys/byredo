import styled from 'styled-components';

export const Section = styled.section`
  padding: 0 16px;
  margin-bottom: 24px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    font-family: var(--font-kr);
    font-weight: 700;
    font-size: clamp(0.95rem, 0.85rem + 0.5vw, 1.05rem);
  }
`;

export const MoreLink = styled.a`
  font-family: var(--font-kr);
  font-size: clamp(0.65rem, 1.5vw + 0.3rem, 0.8rem);
  color: var(--color-ink-soft);
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const ImgWrap = styled.div`
  position: relative;
  background: #f8f8f6;
  border-radius: 12px;
  padding: 44px 0 0;
  margin-bottom: 12px;
  overflow: hidden;

  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    display: block;
  }
`;

export const Rank = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 18px;
  color: var(--color-ink);
  z-index: 2;
`;

export const Name = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #111;
  margin: 0 0 6px;
  text-transform: uppercase;
`;

export const Desc = styled.p`
  font-size: 13px;
  color: #555;
  margin: 0 0 12px;
`;

export const Price = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #111;
  margin: auto 0 0;
`;

export const WishBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  z-index: 2;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    transition: transform 0.15s ease-in-out;
  }

  &:active svg {
    transform: scale(1.15);
  }
`;

export const CartBtn = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  color: #111;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media (hover: hover) {
    opacity: 0;
    transform: translateY(8px);
  }

  ${ImgWrap}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  &.is-added {
    animation: cartPop 0.3s ease;
  }

  @keyframes cartPop {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(0) scale(1.12); }
    100% { transform: translateY(0) scale(1); }
  }
  
  &:active {
    opacity: 0.7;
  }
`;
