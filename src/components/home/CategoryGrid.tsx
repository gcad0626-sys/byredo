import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GridContainer, GridItem, GridIcon, GridLabel } from './CategoryGrid.styles';

const categories = [
  { label: '전체 상품', icon: '/img/icon-cat-all.png', path: '/products' },
  { label: '향 취향찾기', icon: '/img/icon-cat-scent.png', path: '/quiz' },
  { label: '위시리스트', icon: '/img/icon-cat-wish.png', path: '/wishlist' },
  { label: '브랜드 스토리', icon: '/img/icon-cat-story.png', path: '/about' }
];

const CategoryGrid: React.FC = () => {
  const location = useLocation();
  
  return (
    <GridContainer id="category-grid" aria-label="카테고리 메뉴">
      {categories.map((cat, index) => {
        const isActive = location.pathname === cat.path;
        return (
          <GridItem as={Link} to={cat.path} key={index} $isActive={isActive}>
            <GridIcon $isActive={isActive}>
              <img src={cat.icon} alt={cat.label} />
            </GridIcon>
            <GridLabel $isActive={isActive}>{cat.label}</GridLabel>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};

export default CategoryGrid;
