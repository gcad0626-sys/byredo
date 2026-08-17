import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  ProductListMain, ProductListHeader, HeaderTitle, HeaderSort, 
  ProductGrid, ProductCard, ProductBadge, ProductImgWrap, 
  ProductInfo, ProductBrand, ProductName, ProductDesc, ProductPrice, WishBtn
} from './ProductList.styles';
import { products } from '../data/products';
import { useWishlist } from '../context/WishlistContext';

const ProductList: React.FC = () => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleProductClick = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <AppLayout>
      <AppHeader />
      <ProductListMain id="product-list-main">
        <ProductListHeader>
          <HeaderTitle>Hand Creams</HeaderTitle>
          <HeaderSort>
            <select>
              <option>인기순</option>
              <option>최신순</option>
              <option>낮은가격순</option>
              <option>높은가격순</option>
            </select>
          </HeaderSort>
        </ProductListHeader>
        
        <ProductGrid>
          {products.map(product => (
            <ProductCard key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
              {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
              
              <WishBtn onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product.id);
              }}>
                {isInWishlist(product.id) ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                )}
              </WishBtn>

              <ProductImgWrap>
                <img src={product.image} alt={product.name} />
              </ProductImgWrap>
              <ProductInfo>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.name}</ProductName>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>₩{product.price.toLocaleString()}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductListMain>
    </AppLayout>
  );
};

export default ProductList;
