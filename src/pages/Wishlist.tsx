import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  WishlistMain, WishlistHeader, Title, Count, ActionBottom, AddAllBtn, DeleteBtn 
} from './Wishlist.styles';
import { 
  ProductGrid, ProductCard, ProductImgWrap, 
  ProductInfo, ProductBrand, ProductName, ProductDesc, ProductPrice, WishBtn, CartBtn
} from './ProductList.styles';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import Modal from '../components/common/Modal';

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
      option: product.options?.[0] || '30ML',
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

              <ProductImgWrap>
                <img src={item.image} alt={item.name} />
                <DeleteBtn 
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(item.id);
                  }}
                  aria-label="Remove from wishlist"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </DeleteBtn>
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

        <Modal 
          isOpen={showCartModal} 
          message="장바구니에 담겼습니다" 
          onClose={() => {
            setShowCartModal(false);
            navigate('/cart');
          }} 
          confirmText="바로가기"
          cancelText="계속 쇼핑"
          onCancel={() => setShowCartModal(false)}
        />
      </WishlistMain>
    </AppLayout>
  );
};

export default Wishlist;
