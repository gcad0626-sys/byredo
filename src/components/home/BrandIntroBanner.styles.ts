import styled from 'styled-components';

export const BannerContainer = styled.section`
  display: flex;
  align-items: stretch;
  gap: 0;
  background: var(--box-bg-1);
  border-radius: 10px;
  overflow: hidden;
  margin: 0 16px 24px;
  padding: 0 !important;
`;

export const TextContent = styled.div`
  flex: 1 1 auto;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  h2 {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
    font-size: clamp(1rem, 0.85rem + 1vw, 1.25rem);
    word-break: keep-all;
  }

  p {
    font-family: var(--font-kr);
    line-height: 1.6;
    color: var(--color-ink-soft);
    font-size: clamp(0.7rem, 0.65rem + 0.4vw, 0.8rem);
    word-break: keep-all;
    letter-spacing: -0.02em;
  }
`;

export const LinkText = styled.a`
  margin-top: 4px;
  font-family: var(--font-kr);
  font-size: clamp(0.65rem, 1.5vw + 0.3rem, 0.8rem);
  font-weight: 500;
  color: var(--color-ink-soft);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: fit-content;

  span:first-child {
    position: relative;
  }

  span:first-child::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  span:last-child {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover {
    span:first-child::after {
      width: 100%;
    }
    span:last-child {
      transform: translateX(4px);
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 42%;
  aspect-ratio: 3 / 4;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
