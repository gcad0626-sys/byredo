import styled from 'styled-components';

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  text-align: center;
  /* app-main 내부 섹션들의 기본 간격을 위해 하단 여백 추가 (원본 참조) */
  margin: 0 16px 24px;
`;

export const GridItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 4px 0;
  min-height: 44px;
`;

export const GridIcon = styled.span`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: var(--box-line);
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
  }
`;

export const GridLabel = styled.span`
  font-family: var(--font-kr);
  color: var(--color-ink-soft);
  font-size: clamp(0.68rem, 0.62rem + 0.2vw, 0.74rem);
`;
