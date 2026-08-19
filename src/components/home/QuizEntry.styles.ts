import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  text-align: center;
  background: #ffffff;
  border: var(--box-line);
  border-radius: 10px;
  margin: 0 16px 24px;
  padding: 12px 20px 12px !important;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.p`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: var(--font-kr);
  font-weight: 700;
  font-size: 14px;
`;

export const Sub = styled.p`
  font-family: var(--font-kr);
  line-height: 1.6;
  color: var(--color-ink-soft);
  font-size: clamp(0.75rem, 0.68rem + 0.4vw, 0.8rem);
  padding-left: 0;
  margin: 0;
`;

export const Btn = styled.a`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 44px;
  background: var(--color-ink);
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  span:last-child {
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover {
    background: #ffffff;
    color: var(--color-ink);
    border-color: var(--color-ink);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);

    span:last-child {
      transform: translateX(6px);
    }
  }
`;
