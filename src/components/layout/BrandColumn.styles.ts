import styled, { keyframes } from 'styled-components';

const floatHand = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

export const Aside = styled.aside`
  display: none;

  @media (min-width: 481px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 0 0 calc(40% - 16px);
    max-width: calc(40% - 16px);
    border: none;
    background: transparent;
    z-index: 2;
    height: 100%;
    padding: 56px 40px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #ffffff;
      z-index: -1;
    }
  }
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  z-index: 2;
`;

export const Logo = styled.div`
  img {
    height: 20px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.02em;
  font-size: clamp(1.75rem, 1.1rem + 2vw, 2.5rem);
`;

export const SubCopy = styled.p`
  margin: 0;
  font-family: var(--font-kr);
  line-height: 1.6;
  color: var(--color-ink-soft);
  font-size: clamp(0.9rem, 0.7rem + 0.6vw, 1rem);
`;

export const QuizSection = styled.section`
  width: 100%;
  position: relative;
  border: var(--box-line);
  border-radius: 10px;
  background: #ffffff;
  padding: 28px;
  text-align: left;
  
  p {
    font-family: var(--font-kr);
    font-size: 13px;
    line-height: 1.6;
    color: var(--color-ink-soft);
  }
`;

export const QuizHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  h4 {
    font-family: var(--font-kr);
    font-size: 16px;
    font-weight: 700;
  }
`;

export const QuizIcon = styled.span`
  width: 22px;
  height: 22px;
  flex: 0 0 22px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const QuizBtn = styled.a`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 52px;
  background: var(--color-ink);
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1em;
  border-radius: 6px;
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

export const DownloadSection = styled.section`
  width: 100%;
  text-align: center;

  h4 {
    font-family: var(--font-kr);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  p {
    margin-top: 8px;
    font-family: var(--font-kr);
    font-size: 13px;
    line-height: 1.6;
    color: var(--color-ink-soft);
  }
`;

export const Badges = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;

  a {
    display: inline-block;
  }

  img {
    height: 36px;
  }
`;

export const DecoImage = styled.img<{ className: string }>`
  position: absolute;
  pointer-events: none;
  z-index: 0;
  display: none;

  @media (min-width: 481px) {
    display: block;
  }

  &.brand-column__deco--fabric {
    top: -80px;
    left: -80px;
    width: 140px;
  }

  &.brand-column__deco--bag {
    top: -70px;
    right: -150px;
    width: 200px;
    z-index: -2;
    animation: ${floatHand} 4s ease-in-out infinite;
  }

  &.brand-column__watermark {
    bottom: -20px;
    right: -50px;
    width: 160px;
    opacity: 0.3;
    z-index: 1;
  }

  &.brand-column__deco-hand {
    position: absolute;
    bottom: -55px;
    right: -50px;
    width: 90px;
    z-index: 5;
    animation: ${floatHand} 2.5s ease-in-out infinite;
  }
`;
