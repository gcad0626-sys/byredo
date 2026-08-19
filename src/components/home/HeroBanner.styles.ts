import styled from 'styled-components';

export const BannerSection = styled.section`
  margin-bottom: 8px;
  position: relative;
`;

export const Track = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  overflow: hidden;
`;

export const Slide = styled.div<{ isActive?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.isActive ? 1 : 0};
  visibility: ${props => props.isActive ? 'visible' : 'hidden'};
  transition: opacity 0.8s ease-in-out, visibility 0.8s ease-in-out;
  background: var(--color-bg-banner);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Copy = styled.div`
  position: absolute;
  left: 24px;
  bottom: 40px;
  right: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Title = styled.h2`
  margin: 4px 0 0;
  font-family: 'Carlito', sans-serif;
  font-weight: 700;
  line-height: 1.15;
  color: #ffffb7;
  font-size: clamp(24px, 7vw, 30px);
  background: rgba(0, 0, 0, 0.1);
  padding: 6px 16px 6px 12px;
  margin-left: -12px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Desc = styled.p`
  margin: 10px 0 0;
  font-family: var(--font-kr);
  font-weight: 500;
  font-size: clamp(11px, 3.5vw, 14px);
  line-height: 1.5;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
  padding: 4px 16px 4px 12px;
  margin-left: -12px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Cta = styled.a`
  margin-top: 14px;
  margin-left: -12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  padding: 12px 20px;
  background: var(--color-ink);
  color: #ffffff;
  font-family: var(--font-kr);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 4px;
`;

export const Indicator = styled.div`
  position: absolute;
  bottom: 16px;
  left: 24px;
  transform: none;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 999;
`;

export const Dot = styled.button<{ isActive?: boolean }>`
  width: 6px;
  height: 6px;
  padding: 0;
  border-radius: 50%;
  background: ${props => props.isActive ? 'var(--color-ink)' : '#c7c5b8'};
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 32px;
    height: 32px;
    transform: translate(-50%, -50%);
  }
`;
