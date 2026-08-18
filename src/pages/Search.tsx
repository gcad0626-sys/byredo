import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import { HeaderContainer, IconButton } from '../components/home/AppHeader.styles';
import { 
  SearchMain,
  SearchRecent, SearchRecentTitle, SearchRecentList 
} from './Search.styles';
import { products } from '../data/products';

const SearchHeader = styled(HeaderContainer)`
  gap: 8px;
  padding: 0 12px;
`;

const SearchBarInner = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f5f5f3;
  border-radius: 8px;
  padding: 0 12px;
  height: 38px;

  svg {
    flex-shrink: 0;
  }
`;

const HeaderSearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #111;
  outline: none;

  &::placeholder {
    color: #aaa;
  }
`;

const ClearBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #aaa;
  font-size: 16px;
  line-height: 1;
  padding: 0;
  display: flex;
  align-items: center;
`;

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyword.trim()) {
      navigate('/products');
    }
  };
  
  const isHandCreamSearch = keyword.includes('핸드크림') || keyword.toLowerCase().includes('hand cream');
  const searchResults = isHandCreamSearch ? products : [];

  return (
    <AppLayout>
      <SearchHeader>
        <IconButton onClick={() => navigate(-1)} aria-label="뒤로가기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </IconButton>
        <SearchBarInner>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
          </svg>
          <HeaderSearchInput
            type="text"
            placeholder="검색어를 입력하세요"
            value={keyword}
            autoFocus
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleSearch}
          />
          {keyword && (
            <ClearBtn onClick={() => setKeyword('')} aria-label="지우기">✕</ClearBtn>
          )}
        </SearchBarInner>
      </SearchHeader>

      <SearchMain id="search-main">
        {searchResults.length > 0 ? (
          <div style={{ padding: '0 16px', marginTop: '24px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '16px', color: '#111' }}>검색 결과</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {searchResults.map(product => (
                <div key={product.id} onClick={() => navigate(`/products/${product.id}`)} style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
                  <img src={product.image} alt={product.name} style={{ width: '60px', height: '75px', objectFit: 'cover', background: '#f0f0f0' }} />
                  <div>
                    <p style={{ fontSize: '10px', color: '#666', marginBottom: '4px' }}>{product.brand}</p>
                    <p style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', color: '#111' }}>{product.name}</p>
                    <p style={{ fontSize: '12px', color: '#333' }}>₩{product.price.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
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
        )}
      </SearchMain>
    </AppLayout>
  );
};

export default Search;
