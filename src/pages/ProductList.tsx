import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  ProductListMain, ProductListHeader, HeaderTitle, HeaderSort, 
  ProductGrid, ProductCard, ProductBadge, ProductImgWrap, 
  ProductInfo, ProductBrand, ProductName, ProductDesc, ProductPrice, WishBtn, CartBtn
} from './ProductList.styles';
import { products } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import Toast from '../components/common/Toast';

const ProductList: React.FC = () => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [showCartModal, setShowCartModal] = useState(false);
  const [addedItems, setAddedItems] = useState<Record<number, boolean>>({});

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    addToCart({
      productId: product.id,
      name: product.name,
      image: product.image,
      option: product.options?.[0] || '30ML',
      qty: 1,
      price: product.price,
      giftMessage: null,
    });
    
    setAddedItems(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 1000);
    
    setShowCartModal(true);
  };

  return (
    <AppLayout>
      <AppHeader />
      <ProductListMain id="product-list-main" style={{ position: 'relative' }}>
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#d14343">
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
                <CartBtn 
                  className={addedItems[product.id] ? 'is-added' : ''}
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  {addedItems[product.id] ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  )}
                </CartBtn>
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

        <Toast 
          isOpen={showCartModal} 
          message="장바구니에 담았습니다" 
          onClose={() => setShowCartModal(false)} 
        />
      </ProductListMain>
    </AppLayout>
  );
};

export default ProductList;
