import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import AppHeader from '../components/home/AppHeader';
import { OrderListMain, OlCard } from './OrderList.styles';
import { 
  OrderCard, OrderTop, OrderDate, OrderStatus, 
  OrderProduct, ProductImg, ProductInfo, ProductName, ProductOption, ProductPrice, OrderActions
} from './MyPage.styles'; // MyPage의 카드 스타일 재사용
import { useOrders } from '../context/OrderContext';

const OrderList: React.FC = () => {
  const navigate = useNavigate();
  const { orders } = useOrders();

  return (
    <AppLayout>
      <AppHeader />
      {/* 실제 구현시 주문내역 전용 헤더 사용 가능 */}
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
