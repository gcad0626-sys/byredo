import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getStorageKey } from '../utils/storage';
import Modal from '../components/common/Modal';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import { HeaderContainer, IconButton } from '../components/home/AppHeader.styles';
import { 
  WriteMain, WriteHeader, Title, ProductCard, ProductImg, ProductInfo, ProductCate, ProductName, 
  RatingSection, RatingLabel, Stars, StarBtn, 
  TextSection, Textarea, Action, SubmitBtn 
} from './WriteReview.styles';

const BackHeader = styled(HeaderContainer)`
  justify-content: flex-start;
  gap: 8px;
  padding: 0 8px 0 4px;
`;
const BackTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: #111;
`;

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editReview = location.state?.reviewToEdit;
  const product = location.state?.product || editReview || { 
    name: 'BLANCHE', 
    image: '/img/product-blanche.jpg', 
    option: 'HAND CREAM' 
  };
  
  const [rating, setRating] = useState(editReview ? editReview.stars.split('★').length - 1 : 0);
  const [content, setContent] = useState(editReview ? editReview.text : '');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [redirectOnClose, setRedirectOnClose] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) {
      setModalMessage('별점을 선택해주세요.');
      setModalOpen(true);
      return;
    }
    if (content.trim().length < 10) {
      setModalMessage('리뷰 내용을 10자 이상 작성해주세요.');
      setModalOpen(true);
      return;
    }
    
    const storageKey = getStorageKey('myReviews');
    const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
    
    if (editReview) {
      const updated = saved.map((r: any) => 
        r.id === editReview.id 
          ? { ...r, stars: '★'.repeat(rating) + '☆'.repeat(5 - rating), text: content }
          : r
      );
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } else {
      const newReview = {
        id: Date.now(),
        productName: product.name,
        image: product.image,
        date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }),
        stars: '★'.repeat(rating) + '☆'.repeat(5 - rating),
        text: content
      };
      localStorage.setItem(storageKey, JSON.stringify([newReview, ...saved]));
    }

    setModalMessage(editReview ? '리뷰가 수정되었습니다.' : '리뷰가 등록되었습니다.');
    setRedirectOnClose(true);
    setModalOpen(true);
  };
  
  const handleModalClose = () => {
    setModalOpen(false);
    if (redirectOnClose) {
      navigate('/mypage/reviews');
    }
  };

  return (
    <AppLayout>
      <BackHeader>
        <IconButton onClick={() => navigate(-1)} aria-label="뒤로가기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </IconButton>
        <BackTitle>Write a Review</BackTitle>
      </BackHeader>
      <WriteMain id="write-review-main">
        <WriteHeader>
          <Title>{editReview ? 'Edit Review' : 'Write a Review'}</Title>
        </WriteHeader>

        <ProductCard>
          <ProductImg>
            <img src={product.image} alt={product.name} />
          </ProductImg>
          <ProductInfo>
            <ProductCate>{product.option || 'HAND CREAM'}</ProductCate>
            <ProductName>{product.name}</ProductName>
          </ProductInfo>
        </ProductCard>

        <RatingSection>
          <RatingLabel>상품은 만족하셨나요?</RatingLabel>
          <Stars>
            {[1, 2, 3, 4, 5].map(star => (
              <StarBtn 
                key={star} 
                active={star <= rating}
                onClick={() => setRating(star)}
              >
                ★
              </StarBtn>
            ))}
          </Stars>
        </RatingSection>

        <TextSection>
          <Textarea 
            placeholder="향, 사용감 등 제품에 대한 솔직한 리뷰를 최소 10자 이상 남겨주세요." 
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </TextSection>
      </WriteMain>
      <Action>
        <SubmitBtn onClick={handleSubmit}>{editReview ? '리뷰 수정하기' : '리뷰 등록하기'}</SubmitBtn>
      </Action>
      <Modal 
        isOpen={modalOpen} 
        message={modalMessage} 
        onClose={handleModalClose} 
      />
    </AppLayout>
  );
};

export default WriteReview;
