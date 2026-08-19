import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import {
  HeaderContainer, IconButton, ActionsWrapper, LogoWrapper, CartBadge
} from '../components/home/AppHeader.styles';
import Modal from '../components/common/Modal';
import { 
  DetailMain, HeroSection, 
  InfoSection, InfoCate, InfoTitle, InfoDesc, InfoPrice, DetailWishBtn,
  OptionsSection, OptionsLabel, Sizes, QtyControl,
  AccordionContainer, AccordionItem, AccordionHeader, AccordionContent,
  ActionBottom, ActionBtn,
  GiftSection, GiftBox, GiftBoxHeader, GiftBoxTitle, ToggleSwitch, GiftBoxContent,
  ReviewsSection, ReviewsHeader, ReviewItem, ReviewMeta, Stars, ReviewDate, ReviewText, ReviewAuthor, BtnMoreReviews
} from './ProductDetail.styles';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const DetailHeader = styled(HeaderContainer)`
  justify-content: space-between;
  padding: 0 16px;
`;

const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const idMatch = window.location.pathname.match(/\/products\/(\d+)/);
  const id = idMatch ? parseInt(idMatch[1], 10) : 1;
  const product = getProductById(id) || getProductById(1)!;
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const [size, setSize] = useState('30ML');
  const [qty, setQty] = useState(1);
  const [expandedScent, setExpandedScent] = useState(true);
  const [expandedIngred, setExpandedIngred] = useState(true);
  const [isGifting, setIsGifting] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [showCartModal, setShowCartModal] = useState(false);

  const currentPrice = size === '100ML' ? 98000 : product.price;

  const { items } = useCart();
  const cartItemCount = items.reduce((sum, item) => sum + item.qty, 0);

  const handleBack = () => {
    if (location.state?.fromQuiz) {
      navigate('/quiz', { state: { returnToResult: true, quizAnswers: location.state.quizAnswers } });
    } else {
      navigate('/products');
    }
  };

  return (
    <AppLayout>
      <DetailHeader>
        <IconButton onClick={handleBack} aria-label="뒤로가기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </IconButton>
        <LogoWrapper>
          <img src="/img/logo.png" alt="BYREDO logo" />
        </LogoWrapper>
        <ActionsWrapper>
          <IconButton as={Link} to="/search" className="trigger-search" id="btn-search-open" aria-label="검색">
            <img src="/img/icon-search.png" alt="search icon" />
          </IconButton>
          <IconButton as={Link} to="/cart" className="trigger-cart" id="btn-cart-open" aria-label="장바구니">
            <img src="/img/icon-cart.png" alt="cart icon" />
            {cartItemCount > 0 && <CartBadge>{cartItemCount}</CartBadge>}
          </IconButton>
          <IconButton as={Link} to="/mypage" className="trigger-mypage" aria-label="마이페이지">
            <img src="/img/icon-user.png" alt="user icon" />
          </IconButton>
        </ActionsWrapper>
      </DetailHeader>
      <DetailMain id="product-detail-main">
        <HeroSection>
          <img src={product.image || "/img/product-baldafrique.jpg"} alt={product.name} />
        </HeroSection>
        
        <InfoSection>
          <InfoCate>HAND CREAM</InfoCate>
          <InfoTitle>{product.name}</InfoTitle>
          <DetailWishBtn onClick={() => toggleWishlist(product.id)}>
            {isInWishlist(product.id) ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            )}
          </DetailWishBtn>
          <InfoDesc>{product.desc}</InfoDesc>
          <InfoPrice>₩{currentPrice.toLocaleString()}</InfoPrice>
        </InfoSection>
        
        <OptionsSection>
          <OptionsLabel>SIZE</OptionsLabel>
          <Sizes>
            {['30ML', '100ML'].map(opt => (
              <button key={opt} className={size === opt ? 'is-active' : ''} onClick={() => setSize(opt)}>{opt}</button>
            ))}
          </Sizes>
          <OptionsLabel>QUANTITY</OptionsLabel>
          <QtyControl>
            <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </QtyControl>
        </OptionsSection>
        
        <AccordionContainer>
          <AccordionItem>
            <AccordionHeader onClick={() => setExpandedScent(!expandedScent)}>
              <span>SCENT NOTES</span>
              <span>{expandedScent ? '∧' : '∨'}</span>
            </AccordionHeader>
            <AccordionContent isExpanded={expandedScent}>
              <ul>
                <li><strong>Top:</strong> White Rose, Pink Pepper</li>
                <li><strong>Heart:</strong> Violet, Neroli</li>
                <li><strong>Base:</strong> Blonde Woods, Sandalwood</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader onClick={() => setExpandedIngred(!expandedIngred)}>
              <span>전성분</span>
              <span>{expandedIngred ? '∧' : '∨'}</span>
            </AccordionHeader>
            <AccordionContent isExpanded={expandedIngred}>
              <p>정제수, 시어버터, 향료, 글리세릴스테아레이트, PEG-100스테아레이트, 알코올, 스테아레스-2, 글리세린, 세틸알코올, 스테아릭애씨드, 팔미틱애씨드</p>
            </AccordionContent>
          </AccordionItem>
        </AccordionContainer>
        
        <GiftSection>
          <GiftBox>
            <GiftBoxHeader>
              <GiftBoxTitle>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="8" width="18" height="14" rx="2" />
                  <path d="M12 8v14M8 8V6a2 2 0 114 0v2M12 8V6a2 2 0 114 0v2" />
                </svg>
                <span>선물하기 (GIFTING SERVICE)</span>
              </GiftBoxTitle>
              <ToggleSwitch>
                <input type="checkbox" id="gift-toggle" checked={isGifting} onChange={(e) => setIsGifting(e.target.checked)} />
                <label htmlFor="gift-toggle"></label>
              </ToggleSwitch>
            </GiftBoxHeader>
            <GiftBoxContent>
              <span>커스텀 메시지 카드 작성</span>
              <textarea 
                placeholder="메시지를 입력해주세요..." 
                disabled={!isGifting}
                value={giftMessage}
                onChange={(e) => setGiftMessage(e.target.value)}
              />
            </GiftBoxContent>
          </GiftBox>
        </GiftSection>

        <ReviewsSection>
          <ReviewsHeader>
            <h3>리뷰 (124)</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/mypage/write-review', { state: { product } }); }}>리뷰 작성하기</a>
          </ReviewsHeader>
          <ReviewItem>
            <ReviewMeta>
              <Stars>★★★★★</Stars>
              <ReviewDate>2024.05.12</ReviewDate>
            </ReviewMeta>
            <ReviewText>향이 정말 깔끔하고 은은하게 오래가요. 만족합니다.</ReviewText>
            <ReviewAuthor>Sarah K.</ReviewAuthor>
          </ReviewItem>
          <ReviewItem>
            <ReviewMeta>
              <Stars>★★★★★</Stars>
              <ReviewDate>2024.05.08</ReviewDate>
            </ReviewMeta>
            <ReviewText>선물로 구매했는데 받는 분이 너무 좋아하네요. 패키지가 정말 고급스러워요.</ReviewText>
            <ReviewAuthor>Michael R.</ReviewAuthor>
          </ReviewItem>
          <BtnMoreReviews onClick={() => navigate('/mypage/reviews')}>전체 리뷰 보기</BtnMoreReviews>
        </ReviewsSection>

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
        
      </DetailMain>

      <ActionBottom>
        <ActionBtn onClick={() => {
          addToCart({
            productId: product.id,
            name: product.name,
            image: product.image,
            option: size,
            qty: qty,
            price: currentPrice,
            giftMessage: isGifting && giftMessage ? giftMessage : null
          });
          setShowCartModal(true);
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <span>장바구니 담기</span>
        </ActionBtn>
        <ActionBtn primary onClick={() => navigate('/checkout', { state: { product, size, qty, isGifting, giftMessage, price: currentPrice } })}>바로 구매하기</ActionBtn>
      </ActionBottom>
    </AppLayout>
  );
};

export default ProductDetail;
