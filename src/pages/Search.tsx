import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  SearchMain, SearchInputArea, SearchInput, SearchClear, 
  SearchRecent, SearchRecentTitle, SearchRecentList 
} from './Search.styles';
import AppHeader from '../components/home/AppHeader';
import AppLayout from '../components/layout/AppLayout';
import { products } from '../data/products';

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
