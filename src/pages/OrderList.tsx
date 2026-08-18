import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import { HeaderContainer, IconButton } from '../components/home/AppHeader.styles';
import { OrderListMain, OlCard } from './OrderList.styles';
import { 
  OrderCard, OrderTop, OrderDate, OrderStatus, 
  OrderProduct, ProductImg, ProductInfo, ProductName, ProductOption, ProductPrice, OrderActions
} from './MyPage.styles';
import { useOrders } from '../context/OrderContext';

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

const OrderList: React.FC = () => {
  const navigate = useNavigate();
  const { orders } = useOrders();

  return (
    <AppLayout>
      <BackHeader>
        <IconButton onClick={() => navigate(-1)} aria-label="뒤로가기">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </IconButton>
        <BackTitle>주문 내역</BackTitle>
      </BackHeader>
      <OrderListMain id="order-list-main">
        {orders.length === 0 ? (
          <div style={{ padding: '40px 16px', textAlign: 'center', fontSize: '13px', color: '#666', background: '#fff' }}>
            주문 내역이 없습니다.
          </div>
        ) : (
          orders.map(order => (
            <OlCard key={order.id}>
              <OrderCard>
                <OrderTop>
                  <OrderDate>{order.date} (주문번호: {order.orderNumber})</OrderDate>
                  <OrderStatus>{order.status}</OrderStatus>
                </OrderTop>
                {order.items.map((item, idx) => (
                  <OrderProduct key={idx} onClick={() => navigate(`/mypage/orders/${order.id}`)} style={{ cursor: 'pointer' }}>
                    <ProductImg><img src={item.image} alt={item.name} /></ProductImg>
                    <ProductInfo>
                      <ProductName>{item.name}</ProductName>
                      <ProductOption>{item.option} / {item.qty}개</ProductOption>
                      <ProductPrice>₩{(item.price * item.qty).toLocaleString()}</ProductPrice>
                    </ProductInfo>
                  </OrderProduct>
                ))}
                <OrderActions>
                  <button onClick={() => navigate(`/mypage/orders/${order.id}`)}>주문 상세 보기</button>
                  <button onClick={() => navigate('/mypage/write-review')}>리뷰작성</button>
                </OrderActions>
              </OrderCard>
            </OlCard>
          ))
        )}
      </OrderListMain>
    </AppLayout>
  );
};

export default OrderList;
