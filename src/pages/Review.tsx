import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import { HeaderContainer, IconButton } from '../components/home/AppHeader.styles';
import { 
  ReviewMain, ReviewHeader, Title, Subtitle, 
  ReviewList, ReviewItem, ReviewImg, ReviewContent, ReviewTop, 
  ReviewName, ReviewDate, ReviewStars, ReviewText, ReviewActions 
} from './Review.styles';

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

const Review: React.FC = () => {
  const navigate = useNavigate();

  const initialReviews = [
    {
      id: 1,
      productName: 'BLANCHE',
      image: '/org/img/product-blanche.jpg',
      date: '2024.05.15',
      stars: '★★★★★',
      text: '향이 너무 좋아서 계속 맡게 돼요. 패키지도 고급스러워서 선물용으로도 딱이네요! 발림성도 부드럽고 끈적임이 없어서 데일리로 쓰기 좋습니다.'
    },
    {
      id: 2,
      productName: "BAL D'AFRIQUE",
      image: '/org/img/product-baldafrique.jpg',
      date: '2024.05.02',
      stars: '★★★★★',
      text: '처음 써보는데 잔향이 정말 오래갑니다. 주변에서 다들 향수 뭐 쓰냐고 물어보네요. 재구매 의사 100% 입니다.'
    }
  ];
  
  const [reviews, setReviews] = useState(initialReviews);
  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('myReviews') || '[]');
    if (saved.length > 0) {
      setReviews([...saved, ...initialReviews]);
    }
  }, []);

  const handleDelete = (id: number) => {
    const isConfirmed = window.confirm('정말 삭제하시겠습니까?');
    if (isConfirmed) {
      const updatedReviews = reviews.filter(r => r.id !== id);
      setReviews(updatedReviews);
      
      const saved = JSON.parse(localStorage.getItem('myReviews') || '[]');
      const updatedSaved = saved.filter((r: any) => r.id !== id);
      localStorage.setItem('myReviews', JSON.stringify(updatedSaved));
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
        <BackTitle>My Reviews</BackTitle>
      </BackHeader>
      <ReviewMain id="review-main">
        <ReviewHeader>
          <Title>My Reviews</Title>
          <Subtitle>작성한 리뷰 {reviews.length}개</Subtitle>
        </ReviewHeader>
        
        <ReviewList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewImg onClick={() => navigate('/products/1')}>
                <img src={review.image} alt={review.productName} />
              </ReviewImg>
              <ReviewContent>
                <ReviewTop>
                  <ReviewName onClick={() => navigate('/products/1')}>{review.productName}</ReviewName>
                  <ReviewDate>{review.date}</ReviewDate>
                </ReviewTop>
                <ReviewStars>{review.stars}</ReviewStars>
                <ReviewText>{review.text}</ReviewText>
                <ReviewActions>
                  <button onClick={() => navigate('/mypage/write-review', { state: { reviewToEdit: review } })}>수정</button>
                  <button onClick={() => handleDelete(review.id)}>삭제</button>
                </ReviewActions>
              </ReviewContent>
            </ReviewItem>
          ))}
        </ReviewList>
      </ReviewMain>
    </AppLayout>
  );
};

export default Review;
