import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import styled from 'styled-components';
import { HeaderContainer, IconButton } from '../components/home/AppHeader.styles';
import { OrderListMain, OlCard, DeleteOrderBtn } from './OrderList.styles';
import { 
  OrderCard, OrderTop, OrderDate, OrderStatus,
  OrderProduct, ProductImg, ProductInfo, ProductName, ProductOption, ProductPrice, OrderActions
} from './MyPage.styles';
import { useOrders } from '../context/OrderContext';
import { getProductById, products } from '../data/products';

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

const MinimalReviewBtn = styled.button`
  background: none;
  border: 1px solid #d8d8d0;
  padding: 4px 8px;
  font-size: 10px;
  color: #666;
  cursor: pointer;
  border-radius: 2px;
  margin-top: 6px;
  align-self: flex-start;
  transition: all 0.2s;
  
  &:active {
    background: #f0f0f0;
  }
`;

const OrderList: React.FC = () => {
  const navigate = useNavigate();
  const { orders, deleteOrder } = useOrders();

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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <OrderDate>{order.date} (주문번호: {order.orderNumber})</OrderDate>
                    <OrderStatus>{order.status}</OrderStatus>
                  </div>
                  <DeleteOrderBtn onClick={(e) => { e.stopPropagation(); deleteOrder(order.id); }} aria-label="주문 내역 삭제">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </DeleteOrderBtn>
                </OrderTop>
                {order.items.map((item, idx) => (
                  <OrderProduct key={idx} onClick={() => navigate(`/mypage/orders/${order.id}`)} style={{ cursor: 'pointer' }}>
                    <ProductImg><img src={item.image} alt={item.name} /></ProductImg>
                    <ProductInfo>
                      <ProductName>{item.name}</ProductName>
                      <ProductOption>{item.option?.includes('ML') ? item.option : '30ML'} / {item.qty}개</ProductOption>
                      <ProductPrice>₩{(item.price * item.qty).toLocaleString()}</ProductPrice>
                      {order.status !== '취소 완료' && (
                        <MinimalReviewBtn onClick={(e) => {
                          e.stopPropagation();
                          const product = getProductById(Number((item as any).productId)) || products.find(p => p.name === item.name);
                          if (product) {
                            navigate('/mypage/write-review', { state: { product } });
                          }
                        }}>
                          리뷰 작성하기
                        </MinimalReviewBtn>
                      )}
                    </ProductInfo>
                  </OrderProduct>
                ))}
                <OrderActions>
                  <button onClick={() => navigate(`/mypage/orders/${order.id}`)}>주문 상세 보기</button>
                  {(order.status === '결제 완료' || order.status === '상품 준비중') && (
                    <button onClick={() => navigate(`/mypage/cancel-order/${order.id}`)}>주문 취소</button>
                  )}
                  {(order.status === '배송중' || order.status === '배송완료') && (
                    <button onClick={() => navigate(`/mypage/exchange-return/${order.id}`)}>교환/반품</button>
                  )}
                  {order.status === '취소 완료' && (
                    <button disabled style={{ color: '#ccc', border: '1px solid #eee' }}>취소 완료</button>
                  )}
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
