import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  ReviewMain, ReviewHeader, Title, Subtitle, 
  ReviewList, ReviewItem, ReviewImg, ReviewContent, ReviewTop, 
  ReviewName, ReviewDate, ReviewStars, ReviewText, ReviewActions 
} from './Review.styles';

const Review: React.FC = () => {
  const navigate = useNavigate();

  const reviews = [
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

  return (
    <AppLayout>
      <AppHeader />
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
                  <button>수정</button>
                  <button>삭제</button>
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
