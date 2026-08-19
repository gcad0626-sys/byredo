import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Section, 
  Head, 
  MoreLink, 
  List, 
  Card, 
  ImgWrap, 
  Rank, 
  Name, 
  Desc, 
  Price,
  WishBtn,
  CartBtn
} from './BestProducts.styles';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import Modal from '../common/Modal';

const products = [
  {
    id: 3,
    rank: "01",
    image: "/img/product-blanche.jpg",
    name: "BLANCHE",
    desc: "블랑쉬\n핸드크림 30ml",
    price: "₩70,000"
  },
  {
    id: 4,
    rank: "02",
    image: "/img/product-baldafrique.jpg",
    name: "BAL D'AFRIQUE",
    desc: "발 다프리크\n핸드크림 30ml",
    price: "₩70,000"
  }
];

const BestProducts: React.FC = () => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [showCartModal, setShowCartModal] = useState(false);

  const handleAddToCart = (e: React.MouseEvent, item: any) => {
    e.stopPropagation();
    addToCart({
      productId: item.id,
      name: item.name,
      image: item.image,
      option: '30ML',
      qty: 1,
      price: parseInt(item.price.replace(/[^0-9]/g, ''), 10),
      giftMessage: null,
    });
    setShowCartModal(true);
  };

  return (
    <Section id="best-products" aria-label="실시간 베스트 상품">
      <Head>
        <h3>실시간 베스트 상품</h3>
        <MoreLink as={Link} to="/products" className="trigger-product-list">전체 상품 보기 ›</MoreLink>
      </Head>
      <List>
        {products.map((item, index) => (
          <Card key={index} className="trigger-product-detail" onClick={() => navigate(`/products/${item.id}`)}>
            <ImgWrap>
              <Rank>{item.rank}</Rank>
              
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

              <img src={item.image} alt={`${item.name} 핸드크림`} />

              <CartBtn onClick={(e) => handleAddToCart(e, item)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </CartBtn>
            </ImgWrap>
            <Name>{item.name}</Name>
            <Desc dangerouslySetInnerHTML={{ __html: item.desc.replace(/\n/g, '<br>') }} />
            <Price>{item.price}</Price>
          </Card>
        ))}
      </List>
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
    </Section>
  );
};

export default BestProducts;
