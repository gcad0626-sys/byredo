import styled from 'styled-components';

export const Section = styled.section`
  /* .live-search-rank (기본 여백) */
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  margin: 0 0 14px;
  font-family: var(--font-kr);
  font-weight: 700;
  font-size: clamp(0.95rem, 0.85rem + 0.5vw, 1.05rem);
  padding: 0 16px; /* 원본의 app-main 자식 요소들 패딩 구조 고려 */
`;

export const Scroller = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none !important;
  padding-bottom: 2px;
  padding-left: 16px;
  padding-right: 16px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none !important;
  }
`;

export const Pill = styled.a`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid #dddad0;
  background: #ffffff;
  white-space: nowrap;
  font-family: var(--font-kr);
  font-size: clamp(0.75rem, 0.65rem + 0.4vw, 0.85rem);
  user-select: none;
`;

export const Num = styled.span`
  font-family: var(--font-family);
  font-weight: 600;
  color: var(--color-ink);
`;

export const Keyword = styled.span`
  color: var(--color-ink);
`;

export const Trend = styled.span`
  color: #d1653f;
  font-size: 0.8em;
`;
