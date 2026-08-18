import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      alert('별점을 선택해주세요.');
      return;
    }
    if (content.trim().length < 10) {
      alert('리뷰 내용을 10자 이상 작성해주세요.');
      return;
    }
    
    const newReview = {
      id: Date.now(),
      productName: 'BLANCHE',
      image: '/org/img/product-blanche.jpg',
      date: new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }),
      stars: '★'.repeat(rating) + '☆'.repeat(5 - rating),
      text: content
    };
    
    const saved = JSON.parse(localStorage.getItem('myReviews') || '[]');
    localStorage.setItem('myReviews', JSON.stringify([newReview, ...saved]));

    alert('리뷰가 등록되었습니다.');
    navigate('/mypage/reviews');
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
          <Title>Write a Review</Title>
        </WriteHeader>

        <ProductCard>
          <ProductImg>
            <img src="/org/img/product-blanche.jpg" alt="BLANCHE" />
          </ProductImg>
          <ProductInfo>
            <ProductCate>HAND CREAM</ProductCate>
            <ProductName>BLANCHE<br />블랑쉬 핸드 크림</ProductName>
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

        <Action>
          <SubmitBtn onClick={handleSubmit}>리뷰 등록하기</SubmitBtn>
        </Action>
      </WriteMain>
    </AppLayout>
  );
};

export default WriteReview;
