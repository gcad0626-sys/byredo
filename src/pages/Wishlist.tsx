import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  WishlistMain, WishlistHeader, Title, Count, ActionBottom, AddAllBtn 
} from './Wishlist.styles';
import { 
  ProductGrid, ProductCard, ProductImgWrap, 
  ProductInfo, ProductBrand, ProductName, ProductDesc, ProductPrice, WishBtn, CartBtn
} from './ProductList.styles';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Wishlist: React.FC = () => {
  const navigate = useNavigate();
  const { wishlistIds, toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [showCartModal, setShowCartModal] = useState(false);

  const wishlistItems = products.filter(p => wishlistIds.includes(p.id));

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    addToCart({
      productId: product.id,
      name: product.name,
      image: product.image,
      option: product.desc || '단품',
      qty: 1,
      price: product.price,
      giftMessage: null,
    });
    setShowCartModal(true);
  };

  return (
    <AppLayout>
      <AppHeader />
      <WishlistMain id="wishlist-main" style={{ position: 'relative' }}>
        <WishlistHeader>
          <Title>Wishlist</Title>
          <Count>{wishlistItems.length} items</Count>
        </WishlistHeader>

        <ProductGrid style={{ paddingTop: 0 }}>
          {wishlistItems.map(item => (
            <ProductCard key={item.id} onClick={() => navigate(`/products/${item.id}`)}>
              <WishBtn onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(item.id);
              }}>
                {isInWishlist(item.id) ? (
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
                <img src={item.image} alt={item.name} />
                <CartBtn onClick={(e) => handleAddToCart(e, item)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </CartBtn>
              </ProductImgWrap>
              <ProductInfo>
                <ProductBrand>{item.brand}</ProductBrand>
                <ProductName>{item.name}</ProductName>
                <ProductDesc>{item.desc}</ProductDesc>
                <ProductPrice>₩{item.price.toLocaleString()}</ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>

        <ActionBottom>
          <AddAllBtn onClick={() => navigate('/cart')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span>전체 장바구니 담기</span>
          </AddAllBtn>
        </ActionBottom>

        {/* 장바구니 담김 모달 (앱 내 표시) */}
        {showCartModal && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <div style={{
              background: '#fff', width: '280px', borderRadius: '16px', padding: '24px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)', textAlign: 'center', position: 'relative'
            }}>
              <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold', color: '#111' }}>장바구니에 담겼습니다</h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button 
                  onClick={() => setShowCartModal(false)}
                  style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', fontWeight: '500' }}
                >계속 쇼핑</button>
                <button 
                  onClick={() => navigate('/cart')}
                  style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', background: '#222', color: '#fff', cursor: 'pointer', fontWeight: '500' }}
                >바로가기</button>
              </div>
            </div>
          </div>
        )}
      </WishlistMain>
    </AppLayout>
  );
};

export default Wishlist;
