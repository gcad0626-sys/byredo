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
  gap: 4px;
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

export const Name = styled.p`
  font-family: var(--font-family);
  font-weight: 600;
  letter-spacing: 0.02em;
  font-size: clamp(0.85rem, 0.75rem + 0.5vw, 0.95rem);
`;

export const Desc = styled.p`
  font-family: var(--font-kr);
  line-height: 1.5;
  color: var(--color-ink-soft);
  font-size: clamp(0.75rem, 0.68rem + 0.4vw, 0.8rem);
`;

export const Price = styled.p`
  margin-top: 2px;
  font-family: var(--font-kr);
  font-weight: 700;
  font-size: clamp(0.85rem, 0.75rem + 0.5vw, 0.95rem);
`;
