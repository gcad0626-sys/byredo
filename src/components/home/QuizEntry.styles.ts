import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  text-align: left;
  background: #ffffff;
  border: var(--box-line);
  border-radius: 10px;
  margin: 0 16px 24px;
  padding: 28px 20px 20px !important;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.p`
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-kr);
  font-weight: 700;
  font-size: clamp(0.9rem, 0.8rem + 0.5vw, 1rem);
`;

export const Badge = styled.span`
  position: static;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-ink);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 14px;
    height: 14px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
`;

export const Sub = styled.p`
  font-family: var(--font-kr);
  line-height: 1.6;
  color: var(--color-ink-soft);
  font-size: clamp(0.75rem, 0.68rem + 0.4vw, 0.8rem);
  padding-left: 32px;
  margin: 0;
`;

export const Btn = styled.a`
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px;
  background: var(--color-ink);
  color: #ffffff;
  font-family: var(--font-kr);
  font-size: clamp(0.8rem, 0.72rem + 0.4vw, 0.9rem);
  font-weight: 600;
  border-radius: 4px;
`;
