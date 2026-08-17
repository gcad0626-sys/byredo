import React from 'react';
import { Link } from 'react-router-dom';
import { GridContainer, GridItem, GridIcon, GridLabel } from './CategoryGrid.styles';

const categories = [
  { label: '전체 상품', icon: '/org/img/icon-cat-all.png', path: '/products' },
  { label: '향 취향찾기', icon: '/org/img/icon-cat-scent.png', path: '/quiz' },
  { label: '위시리스트', icon: '/org/img/icon-cat-wish.png', path: '/wishlist' },
  { label: '브랜드 스토리', icon: '/org/img/icon-cat-story.png', path: '/about' }
];

const CategoryGrid: React.FC = () => {
  return (
    <GridContainer id="category-grid" aria-label="카테고리 메뉴">
      {categories.map((cat, index) => (
        <GridItem as={Link} to={cat.path} key={index}>
          <GridIcon>
            <img src={cat.icon} alt={cat.label} />
          </GridIcon>
          <GridLabel>{cat.label}</GridLabel>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default CategoryGrid;
