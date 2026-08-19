import styled, { keyframes } from 'styled-components';

const iconBounce = keyframes`
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-5px) scale(1.08); }
  100% { transform: translateY(0) scale(1); }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  text-align: center;
  /* app-main 내부 섹션들의 기본 간격을 위해 하단 여백 추가 (원본 참조) */
  margin: 0 16px 24px;
`;

export const GridItem = styled.a<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  min-height: 44px;
  text-decoration: none;

  @media (hover: hover) {
    &:hover span:first-child {
      animation: ${iconBounce} 0.4s ease-in-out forwards;
    }
  }
`;

export const GridIcon = styled.span<{ $isActive?: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid ${props => props.$isActive ? '#111' : '#e0e0e0'};
  background: ${props => props.$isActive ? '#f8f8f8' : '#ffffff'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  will-change: transform;

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    opacity: ${props => props.$isActive ? 1 : 0.85};
    transition: opacity 0.3s ease;
  }
`;

export const GridLabel = styled.span<{ $isActive?: boolean }>`
  font-family: var(--font-kr);
  color: ${props => props.$isActive ? '#111' : 'var(--color-ink-soft)'};
  font-weight: ${props => props.$isActive ? '600' : 'normal'};
  font-size: clamp(0.68rem, 0.62rem + 0.2vw, 0.74rem);
  transition: color 0.3s ease;
`;
