import styled from 'styled-components';

export const BannerSection = styled.section`
  margin-bottom: 8px;
  position: relative;
`;

export const Track = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Slide = styled.div`
  position: relative;
  flex: 0 0 100%;
  scroll-snap-align: start;
  background: var(--color-bg-banner);
  aspect-ratio: 4 / 5;
  overflow: hidden;

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
  bottom: 34px;
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
