import styled from 'styled-components';

export const SearchMain = styled.main`
  flex: 1;
  overflow-y: auto;
  padding-bottom: var(--tabbar-h);
  background: var(--color-bg-page);
  display: flex;
  flex-direction: column;
`;

export const SearchInputArea = styled.div`
  margin: 32px 24px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d0d0c8;
  padding-bottom: 12px;
  gap: 12px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-family: var(--font-kr);
  font-size: 15px;
  color: #1a1a1a;
  outline: none;

  &::placeholder {
    color: #888;
  }
`;

export const SearchClear = styled.button`
  color: #888;
  font-size: 16px;
  padding: 0 4px;
`;

export const SearchRecent = styled.div`
  padding: 40px 24px;
`;

export const SearchRecentTitle = styled.h3`
  font-family: var(--font-kr);
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 20px;
  color: var(--color-ink);
`;

export const SearchRecentList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-kr);
    font-size: 15px;
    color: var(--color-ink);
    cursor: pointer;
  }
`;
