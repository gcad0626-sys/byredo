import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  SearchMain, SearchInputArea, SearchInput, SearchClear, 
  SearchRecent, SearchRecentTitle, SearchRecentList 
} from './Search.styles';
import AppHeader from '../components/home/AppHeader';
import AppLayout from '../components/layout/AppLayout';

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyword.trim()) {
      // 검색 로직 (나중에 상품 목록 등과 연동)
      navigate('/products');
    }
  };

  return (
    <AppLayout>
      <AppHeader />
      <SearchMain id="search-main">
        <SearchInputArea>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <SearchInput 
            type="text" 
            placeholder="검색어를 입력하세요" 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleSearch}
          />
          {keyword && (
            <SearchClear aria-label="지우기" onClick={() => setKeyword('')}>✕</SearchClear>
          )}
        </SearchInputArea>
        
        <SearchRecent>
          <SearchRecentTitle>최근 검색어</SearchRecentTitle>
          <SearchRecentList>
            <li onClick={() => setKeyword('블랑쉬')}>
              <span>블랑쉬</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </li>
            <li onClick={() => setKeyword('핸드크림')}>
              <span>핸드크림</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </li>
          </SearchRecentList>
        </SearchRecent>
      </SearchMain>
    </AppLayout>
  );
};

export default Search;
