import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { 
  MyPageMain, Profile, Avatar, Name, Membership, 
  Actions, ActionBtn, 
  OrdersSection, OrdersHeader, OrderCard, OrderTop, OrderDate, OrderStatus, 
  OrderProduct, ProductImg, ProductInfo, ProductName, ProductOption, ProductPrice, OrderActions
} from './MyPage.styles';
import { useOrders } from '../context/OrderContext';

const MyPage: React.FC = () => {
  const navigate = useNavigate();
  const { orders } = useOrders();
  const recentOrder = orders.length > 0 ? orders[0] : null;

  return (
    <AppLayout>
      <AppHeader />
      <MyPageMain id="mypage-main">
        <Profile>
          <Avatar>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Avatar>
          <Name>인영님, 안녕하세요</Name>
          <Membership>Membership: SILVER</Membership>
        </Profile>
        
        <Actions>
          <ActionBtn onClick={() => navigate('/wishlist')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>Wishlist</span>
          </ActionBtn>
          <ActionBtn onClick={() => navigate('/mypage/reviews')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M12 9v2m0 4h.01"></path>
            </svg>
            <span>Review</span>
          </ActionBtn>
        </Actions>
        
        <OrdersSection>
          <OrdersHeader>
            <h3>Recent Orders</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate('/mypage/orders'); }}>더보기 ›</a>
          </OrdersHeader>
          
          {recentOrder ? (
            <OrderCard>
              <OrderTop>
                <OrderDate>{recentOrder.date} (주문번호: {recentOrder.orderNumber})</OrderDate>
                <OrderStatus>{recentOrder.status}</OrderStatus>
              </OrderTop>
              {recentOrder.items.map((item, idx) => (
                <OrderProduct key={idx} onClick={() => navigate(`/mypage/orders/${recentOrder.id}`)} style={{ cursor: 'pointer' }}>
                  <ProductImg><img src={item.image} alt={item.name} /></ProductImg>
                  <ProductInfo>
                    <ProductName>{item.name}</ProductName>
                    <ProductOption>{item.option} / {item.qty}개</ProductOption>
                    <ProductPrice>₩{(item.price * item.qty).toLocaleString()}</ProductPrice>
                  </ProductInfo>
                </OrderProduct>
              ))}
              <OrderActions>
                <button onClick={() => navigate(`/mypage/orders/${recentOrder.id}`)}>주문 상세 보기</button>
                {(recentOrder.status === '결제 완료' || recentOrder.status === '상품 준비중') && (
                  <button onClick={() => navigate(`/mypage/cancel-order/${recentOrder.id}`)}>주문 취소</button>
                )}
                {(recentOrder.status === '배송중' || recentOrder.status === '배송완료') && (
                  <button onClick={() => navigate(`/mypage/exchange-return/${recentOrder.id}`)}>교환/반품</button>
                )}
                {recentOrder.status === '취소 완료' && (
                  <button disabled style={{ color: '#ccc', border: '1px solid #eee' }}>취소 완료</button>
                )}
              </OrderActions>
            </OrderCard>
          ) : (
            <div style={{ padding: '40px 16px', textAlign: 'center', fontSize: '13px', color: '#666', background: '#fff' }}>
              최근 주문 내역이 없습니다.
            </div>
          )}
        </OrdersSection>
      </MyPageMain>
    </AppLayout>
  );
};

export default MyPage;
